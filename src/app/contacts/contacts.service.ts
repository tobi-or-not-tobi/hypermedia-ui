import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BASE_PATH } from '../typescript-angular-client-generated';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const ENDPOINT = '/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private list: BehaviorSubject<any> = new BehaviorSubject(null);
  details$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    @Inject(BASE_PATH) private basePath: string,
    private httpClient: HttpClient
  ) {}

  getList(): Observable<any> {
    this.loadList();
    return this.list;
  }

  paginate(paramValue) {
    let params = new HttpParams();
    params = params.append('page', paramValue.page);
    params = params.append('size', paramValue.size);

    this.loadList(ENDPOINT, params);
  }

  loadList(endpoint: string = ENDPOINT, params: HttpParams = new HttpParams()) {
    this.get(endpoint, params).subscribe(contacts => this.list.next(contacts));
  }

  loadDetails(endpoint: string): Observable<any> {
    this.httpClient.get(`${this.basePath}${endpoint}`).subscribe(details => {
      this.details$.next(details);
    });
    return this.details$;
  }

  clearDetails() {
    this.details$.next(null);
  }

  post(endpoint: string, body: string): Observable<any> {
    const observable = this.httpClient
      .post(`${this.basePath}${endpoint}`, body)
      .pipe(tap(() => this.loadList()));
    observable.subscribe();
    return observable;
  }

  get(
    endpoint: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.httpClient.get(`${this.basePath}${endpoint}`, { params });
  }

  patch(endpoint: string, body: string): Observable<any> {
    const observable = this.httpClient
      .patch(`${this.basePath}${endpoint}`, body)
      .pipe(tap(() => this.loadList()));
    observable.subscribe();
    return observable;
  }

  delete(endpoint: string): Observable<any> {
    const observable = this.httpClient
      .delete(`${this.basePath}${endpoint}`)
      .pipe(
        tap(() => {
          this.details$.next(null);
          this.loadList();
        })
      );
    observable.subscribe();
    return observable;
  }
}
