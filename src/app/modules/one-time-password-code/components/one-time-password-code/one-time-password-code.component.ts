import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FsClipboardModule } from '@firestitch/clipboard';



@Component({
    selector: 'fs-one-time-password-code',
    templateUrl: './one-time-password-code.component.html',
    styleUrls: ['./one-time-password-code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsClipboardModule],
})
export class OneTimePasswordCodeComponent implements OnInit {

  @Input() public code;

  public codeParts = [];

  public ngOnInit(): void {
    this.codeParts = this.code.match(/.{3,3}/g);
  }

}
