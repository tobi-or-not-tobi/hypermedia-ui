import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HyContacts,
  ContactsService
} from '../typescript-angular-client-generated';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts$: Observable<HyContacts>;

  constructor(private contactsService: ContactsService) {
    this.contacts$ = this.contactsService.getContacts();
  }
}
