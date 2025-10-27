import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { OneTimePasswordsComponent } from '../../../../src/app/modules/one-time-passwords/components/one-time-passwords/one-time-passwords.component';


@Component({
    selector: 'app-one-time-passwords',
    templateUrl: './one-time-passwords.component.html',
    styleUrls: ['./one-time-passwords.component.scss'],
    standalone: true,
    imports: [OneTimePasswordsComponent]
})
export class OneTimePassswordsComponent implements OnInit {

  public oneTimePasswords = [];

  public ngOnInit(): void {
    this.oneTimePasswords = [
        {
          "id": 2,
          "accountId": 10,
          "creatorAccountId": 10,
          "createDate": "2022-04-24T11:22:03+00:00",
          "expiryDate": "2022-04-25T11:22:01+00:00",
          "state": "used",
          "account": {
            "id": 10,
            "state": "active",
            "guid": "90df20da263527d0e66d005f8e2faf34",
            "email": "admin@admin.com",
            "firstName": "Firestitch",
            "lastName": "Administrator",
            "phone": null,
            "name": "Firestitch Administrator",
            "tours": [
              "parent_intro"
            ],
            "createDate": "2022-01-13T16:34:04+00:00",
            "signinDate": "2022-05-10T14:44:52+00:00",
            "imageType": "acronym",
            "image": {
              "tiny": null,
              "small": "./assets/user-avatar.jpg",
              "medium": null,
              "large": null,
              "actual": null
            },
            "activateEmailDate": null,
            "activateEmailMessage": null,
            "activateDate": null,
            "passwordChange": false,
            "digestDate": null,
            "digestFrequency": 1,
            "timezone": null,
            "apiKey": null,
            "apiSecret": null,
            "type": "person",
            "lastExperience": "organization",
            "lastOrganizationId": 12
          },
          "usedDate": "2022-04-24T11:22:10+00:00"
      },
      {
        "id": 1,
        "accountId": 10,
        "creatorAccountId": 10,
        "createDate": "2022-04-24T09:47:49+00:00",
        "expiryDate": "2022-04-25T09:47:42+00:00",
        "state": "pending",
        "account": {
            "id": 10,
            "state": "active",
            "guid": "90df20da263527d0e66d005f8e2faf34",
            "email": "admin@admin.com",
            "firstName": "Firestitch",
            "lastName": "Administrator",
            "phone": null,
            "name": "Firestitch Administrator",
            "tours": [
              "parent_intro"
            ],
            "createDate": "2022-01-13T16:34:04+00:00",
            "signinDate": "2022-05-10T14:44:52+00:00",
            "imageType": "acronym",
            "image": {
              "tiny": null,
              "small": "./assets/user-avatar.jpg",
              "medium": null,
              "large": null,
              "actual": null
            },
            "activateEmailDate": null,
            "activateEmailMessage": null,
            "activateDate": null,
            "passwordChange": false,
            "digestDate": null,
            "digestFrequency": 1,
            "timezone": null,
            "apiKey": null,
            "apiSecret": null,
            "type": "person",
            "lastExperience": "organization",
            "lastOrganizationId": 12
          },
          "usedDate": null
        }
      ];
  }

  public verify = (): Observable<any> => {
    return of(true);
  };

  public oneTimePasswordsFetch = (query): Observable<any> => {
    return of({
      "paging": {
          "records": this.oneTimePasswords.length,
          "limit": 25,
          "offset": 0,
      },
      "oneTimePasswords": this.oneTimePasswords,
    });
  };

  public oneTimePasswordDelete = (oneTimePassword): Observable<any> => {
    this.oneTimePasswords = this.oneTimePasswords
    .filter((item) => {
      return item !== oneTimePassword;
    });

    return of(oneTimePassword);
  };

  public oneTimePasswordSave = (oneTimePassword): Observable<any> => {
    return of({ 
      oneTimePassword: {
        ...oneTimePassword,
        id: 99
      }, 
      password: '543jh@#$dF5g' });
  };

  public accountsFetch = (keyword): Observable<any> => {
    return of([
      {
          "id": 10,
          "email": "admin@admin.com",
          "name": "Firestitch Administrator",
      },
      {
          "id": 21,
          "email": "ray+2398@firestitch.com",
          "name": "Taya Muller",
      }
  ]);
  };

}
