import {
  Component,
  Inject,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FsMessage } from '@firestitch/message';

import { Subject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { addDays } from 'date-fns';


@Component({
  templateUrl: './one-time-password-dialog.component.html',
  styleUrls: ['./one-time-password-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneTimePasswordDialogComponent implements OnInit, OnDestroy {

  public oneTimePassword = null;
  public account;
  public password;

  private _accountsFetch: (keyword: string) => Observable<any[]>;
  private _oneTimePasswordSave: (oneTimePassword) => Observable<any>;
  private _destroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _message: FsMessage,
    private _cdRef: ChangeDetectorRef,
  ) {
    this._accountsFetch = _data.accountsFetch;
    this._oneTimePasswordSave = _data.oneTimePasswordSave;
  }

  public ngOnInit(): void {
    this._fetchData();
  }

  public accountsFetch = (keyword: string): Observable<any> => {
    return this._accountsFetch(keyword)
      .pipe(
        map((accounts) => {
          return accounts
            .map((account) => ({
              ...account,
            }))
        }),
      );
  };

  public accountDisplayWith = (data) => {
    return data?.name;
  };

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public save = () => {
    return this._oneTimePasswordSave(this.oneTimePassword)
      .pipe(
        tap((response) => {
          this.oneTimePassword = response.oneTimePassword;
          this.password = response.password;
          this._cdRef.markForCheck();
          this._message.success('Generated one time password');
        }),
      );
  };

  private _fetchData(): void {
    this.oneTimePassword = {
      expiryDate: addDays(new Date(), 1),
    };
  }

}
