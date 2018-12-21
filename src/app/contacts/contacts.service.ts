import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BASE_PATH } from '../typescript-angular-client-generated';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ContactsService as BackendClient } from 'src/app/typescript-angular-client-generated';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  list$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private backendClient: BackendClient) {}

  paginate(paramValue) {
    let params = new HttpParams();
    params = params.append('page', paramValue.page);
    params = params.append('size', paramValue.size);

    // this.loadList(ENDPOINT, params);
  }

  loadList() {
    this.backendClient
      .getContacts()
      .subscribe(contacts => this.list$.next(contacts));
  }
}
