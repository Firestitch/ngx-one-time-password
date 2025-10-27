import {
  Component,
  Inject,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

import { FsMessage } from '@firestitch/message';

import { Subject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { addDays } from 'date-fns';
import { FsSkeletonModule } from '@firestitch/skeleton';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { FsDialogModule } from '@firestitch/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { FsAutocompleteModule } from '@firestitch/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { OneTimePasswordCodeComponent } from '../../../one-time-password-code/components/one-time-password-code/one-time-password-code.component';
import { MatButton } from '@angular/material/button';


@Component({
    templateUrl: './one-time-password-dialog.component.html',
    styleUrls: ['./one-time-password-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsSkeletonModule,
        FormsModule,
        FsFormModule,
        FsDialogModule,
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        FsAutocompleteModule,
        MatFormField,
        MatLabel,
        MatInput,
        FsDatePickerModule,
        OneTimePasswordCodeComponent,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
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
    this._destroy$.next(null);
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
