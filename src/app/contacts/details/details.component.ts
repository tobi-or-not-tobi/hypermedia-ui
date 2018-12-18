import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BASE_PATH,
  HyContact
} from 'src/app/typescript-angular-client-generated';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ENDPOINT = '/contacts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  details$: Observable<HyContact>;

  constructor(
    @Inject(BASE_PATH) private basePath: string,
    private httpClient: HttpClient,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(p => this.load(p.contactId));
  }

  load(id) {
    this.details$ = <Observable<HyContact>>(
      this.httpClient.get(`${this.basePath}${ENDPOINT}/${id}`)
    );
  }
}
