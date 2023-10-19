import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsOneTimePasswordModule } from '@firestitch/one-time-password';
import { FsLabelModule } from '@firestitch/label';
import { FsStoreModule } from '@firestitch/store';

import { AppMaterialModule } from './material.module';
import {
  ExamplesComponent
} from './components';
import { AppComponent } from './app.component';
import { OneTimePassswordsComponent } from './components/one-time-passwords/one-time-passwords.component';
import { FsDatePickerModule } from '@firestitch/datepicker';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsOneTimePasswordModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsLabelModule,
    FsStoreModule,
    FsDatePickerModule.forRoot(),
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    OneTimePassswordsComponent,
  ],
})
export class PlaygroundModule {
}
