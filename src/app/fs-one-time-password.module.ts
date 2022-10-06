import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FsListModule } from '@firestitch/list';
import { FsDialogModule } from '@firestitch/dialog';
import { FsFormModule } from '@firestitch/form';
import { FsSkeletonModule } from '@firestitch/skeleton';
import { FsDateModule } from '@firestitch/date';
import { FsAutocompleteModule } from '@firestitch/autocomplete';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { FsClipboardModule } from '@firestitch/clipboard';

import { OneTimePasswordsComponent } from './components/one-time-passwords/one-time-passwords.component';
import { OneTimePasswordDialogComponent } from './components/one-time-password-dialog/one-time-password-dialog.component';
import { OneTimePasswordComponent } from './components/one-time-password/one-time-password.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,

    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,

    FsListModule,
    FsDateModule,
    FsClipboardModule,
    FsDialogModule,
    FsFormModule,
    FsDatePickerModule,
    FsSkeletonModule,
    FsAutocompleteModule,
  ],
  declarations: [
    OneTimePasswordsComponent,
    OneTimePasswordDialogComponent,
    OneTimePasswordComponent,
  ],
  exports: [
    OneTimePasswordComponent,
    OneTimePasswordsComponent,
  ],
})
export class FsOneTimePasswordModule { }
