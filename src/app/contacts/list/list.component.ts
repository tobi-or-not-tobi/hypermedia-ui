import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  HyContacts,
  HyLink,
  HyContact
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
    private contactService: ContactsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.list$ = this.contactService.getList();
  }

  create(link: HyLink) {
    this.contactService.details$.next({ contact: {} });
    this.link = link;
  }

  open(item: HyContact, action: string) {
    this.link = item.links.find(l => l.rel === action);
    if (action === 'self' || action === 'update') {
      const link = item.links.find(l => l.rel === 'self');
      this.contactService.loadDetails(link.href);
    }
    if (action === 'remove') {
      this.contactService.delete(this.link.href);
    }
  }

  openLink(endpoint: string) {
    this.contactService.loadList(endpoint);
  }

  test(arg) {
    this.contactService.paginate(arg);
  }
}
