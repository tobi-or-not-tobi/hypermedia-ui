import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  HyContacts,
  HyLink,
  HyContact,
  ContactsService as BackendClient
} from 'src/app/typescript-angular-client-generated';
import { Observable } from 'rxjs';

import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ContactListComponent implements OnInit {
  list$: Observable<HyContacts>;
  details$: Observable<HyContact>;
  link: HyLink;

  constructor(
    private backendClient: BackendClient,
    private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.list$ = this.contactService.list$;
    this.contactService.loadList();
  }

  create() {
    this.router.navigate(['contacts', 'create']);
  }

  edit(item: HyContact) {
    this.router.navigate(['contacts', item.contact.id, 'edit']);
  }

  open(item: HyContact) {
    this.router.navigate(['contacts', item.contact.id]);
  }

  delete(item: HyContact) {
    this.backendClient.removeContact(item.contact.id);
  }

  openLink(endpoint: string) {
    console.log('end', endpoint);
    // this.customContactService.loadList(endpoint);
  }

  paginate(arg) {
    console.log('paginate', arg);
    // this.customContactService.paginate(arg);
  }
}
