import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';



@Component({
  selector: 'fs-one-time-password',
  templateUrl: './one-time-password.component.html',
  styleUrls: ['./one-time-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneTimePasswordComponent implements OnInit {

  @Input() public password;

  public passwordParts = [];

  public ngOnInit(): void {
    this.passwordParts = this.password.match(/.{3,3}/g);
  }

}
