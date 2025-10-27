import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { OneTimePassswordsComponent } from '../one-time-passwords/one-time-passwords.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FsExampleModule, OneTimePassswordsComponent]
})
export class ExamplesComponent {
  public config = environment;
}
