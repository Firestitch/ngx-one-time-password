import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
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

import { OneTimePasswordsComponent, OneTimePasswordComponent } from './components';


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
    FsDialogModule,
    FsFormModule,
    FsDatePickerModule,
    FsSkeletonModule,
    FsAutocompleteModule,
  ],
  declarations: [
    OneTimePasswordsComponent,
    OneTimePasswordComponent,
  ],
  exports: [
    OneTimePasswordsComponent,
    OneTimePasswordComponent,
  ],
})
export class FsOneTimePasswordModule { }
