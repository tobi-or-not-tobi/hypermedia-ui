import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BASE_PATH } from '../typescript-angular-client-generated';
import { BehaviorSubject, combineLatest } from 'rxjs';

import { ContactsService as BackendClient } from 'src/app/typescript-angular-client-generated';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  list$: BehaviorSubject<any> = new BehaviorSubject(null);
  page$: BehaviorSubject<any> = new BehaviorSubject(null);
  size$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private backendClient: BackendClient) {
    // this.page$.subscribe(page => console.log('page', page));
    combineLatest(this.page$, this.size$).subscribe(
      ([page, size]: [number, number]) => {
        this.loadList(page, size);
      }
    );
  }

  paginate(paramValue) {
    let params = new HttpParams();
    params = params.append('page', paramValue.page);
    params = params.append('size', paramValue.size);

    // this.loadList(ENDPOINT, params);
  }

  loadList(page: number = 1, size: number = 10) {
    this.backendClient
      .getContacts(page, size)
      .subscribe(contacts => this.list$.next(contacts));
  }

  set page(page) {
    this.page$.next(page);
  }

  set size(size) {
    this.size$.next(size);
  }
}
