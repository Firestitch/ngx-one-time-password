import { NgModule } from '@angular/core';

import { OneTimePasswordsComponent } from './components/one-time-passwords';


@NgModule({
  imports: [
    OneTimePasswordsComponent,
  ],
  exports: [
    OneTimePasswordsComponent,
  ],
})
export class FsOneTimePasswordModule { }
