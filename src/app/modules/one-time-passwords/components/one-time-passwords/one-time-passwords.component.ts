import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
  OnDestroy,
  Input,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FsListComponent, FsListConfig } from '@firestitch/list';
import { index } from '@firestitch/common';
import { parse } from '@firestitch/date';
import { ItemType } from '@firestitch/filter';

import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { isAfter } from 'date-fns';

import { OneTimePasswordStates } from '../../../../consts/one-time-password-states.const';
import { OneTimePasswordState } from '../../../../enums/one-time-password-state.enum';

import { OneTimePasswordDialogComponent } from '../one-time-password-dialog/one-time-password-dialog.component';


@Component({
  selector: 'fs-one-time-passwords',
  templateUrl: './one-time-passwords.component.html',
  styleUrls: ['./one-time-passwords.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneTimePasswordsComponent implements OnInit, OnDestroy {

  @ViewChild(FsListComponent)
  public listComponent: FsListComponent;

  @Input() public verify: () => Observable<any>;
  @Input() public accountsFetch: (keyword: string) => Observable<any[]>;
  @Input() public oneTimePasswordsFetch: (query) => Observable<any[]>;
  @Input() public oneTimePasswordDelete: (oneTimePassword) => Observable<any>;
  @Input() public oneTimePasswordSave: (oneTimePassword) => Observable<any>;

  public listConfig: FsListConfig;
  public OneTimePasswordStates = index(OneTimePasswordStates,'value','name');
  public OneTimePasswordState = OneTimePasswordState;

  private _destroy$ = new Subject<void>();

  constructor(
    private _dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this._initListConfig();
  }

  public create(): void {
    this.verify()
      .pipe(
        switchMap(() => {
          return this._dialog.open(OneTimePasswordDialogComponent, {
            autoFocus: false,
            data: {
              accountsFetch: this.accountsFetch,
              oneTimePasswordSave: this.oneTimePasswordSave,
            },
          })
            .afterClosed();
        }),
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this.listComponent.reload();
      });

  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  private _initListConfig(): void {
    this.listConfig = {
      sort: { value: 'create_date', direction: 'desc' },
      sorts: [{ value: 'used_date', name: 'Used Date' }],
      actions: [
        {
          label: 'Create',
          click: () => {
            this.create();
          },
        },
      ],
      filters: [
        {
          label: 'Search',
          type: ItemType.Keyword,
          name: 'keyword',
        },
        {
          label: ['From Create Date', 'To Create Date'],
          type: ItemType.DateRange,
          name: 'createDate',
        }
      ],
      rowActions: [
        {
          click: (data) => {
            return this.oneTimePasswordDelete(data);
          },
          remove: {
            title: 'Confirm',
            template: 'Are you sure you would like to delete this one time password?',
          },
          menu: true,
          label: 'Delete',
        },
      ],
      fetch: (query) => {
        query = {
          ...query,
          accounts: true,
        };

        return this.oneTimePasswordsFetch(query)
          .pipe(
            map((response: any) => {
              const oneTimePasswords = response.oneTimePasswords
                .map((oneTimePassword) => {
                  const expiryDate = parse(oneTimePassword.expiryDate);

                  return {
                    ...oneTimePassword,
                    expiryDate,
                    expired: isAfter(new Date(), expiryDate),
                  };
                });

              return { data: oneTimePasswords, paging: response.paging };
            }),
          );
      },
    };
  }

}

