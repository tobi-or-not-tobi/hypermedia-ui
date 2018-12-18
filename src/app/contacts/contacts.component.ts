import { Component, Inject, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import {
  HyLink,
  BASE_PATH,
  HyContacts
} from '../typescript-angular-client-generated';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

const ENDPOINT = '/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private forceReload = new BehaviorSubject<any>(1);

  contacts$: Observable<HyContacts>;

  constructor(
    @Inject(BASE_PATH) private basePath: string,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.forceReload.subscribe(() => {
      this.loadList();
    });
  }

  loadPage(pagination: { size: string; page: string }) {
    const params = new HttpParams({ fromObject: pagination });
    this.loadList(ENDPOINT, params);
  }

  loadList(endpoint: string = ENDPOINT, params: HttpParams = new HttpParams()) {
    this.contacts$ = <Observable<HyContacts>>this.httpClient.get(
      `${this.basePath}${endpoint}`,
      {
        params: params
      }
    );
  }
}
