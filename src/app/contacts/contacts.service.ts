import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BASE_PATH, HyContacts } from '../typescript-angular-client-generated';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private forceReload = new BehaviorSubject<any>(1);

  public contacts$: Observable<HyContacts>;

  constructor(
    @Inject(BASE_PATH) private basePath: string,
    private httpClient: HttpClient
  ) {
    this.forceReload.subscribe(() => {
      this.loadList('/contacts');
    });
  }

  // loadPage(pagination: { size: string; page: string }) {
  //   const params = new HttpParams({ fromObject: pagination });
  //   this.loadList(ENDPOINT, params);
  // }

  loadList(endpoint: string, params: HttpParams = new HttpParams()) {
    this.contacts$ = <Observable<HyContacts>>this.httpClient.get(
      `${this.basePath}${endpoint}`,
      {
        params: params
      }
    );
  }
}
