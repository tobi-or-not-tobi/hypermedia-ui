import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  HyContact,
  HyLink,
  Contact,
  ContactsService as BackendClient
} from 'src/app/typescript-angular-client-generated';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { RouteActions } from '../actions';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class ContactDetailsComponent {
  contact = {};
  links;

  action: RouteActions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private backendClient: BackendClient,
    private contactService: ContactsService
  ) {
    this.activatedRoute.params.pipe(filter(p => p.contactId)).subscribe(p =>
      this.backendClient.getContact(p.contactId).subscribe(details => {
        this.contact = details.contact;
        this.links = details.links;
      })
    );

    this.activatedRoute.data
      .pipe(filter(d => d.action))
      .subscribe(d => (this.action = d.action));
  }

  get isReadonly() {
    return this.action === RouteActions.VIEW;
  }

  get isEditable() {
    return this.action === RouteActions.EDIT;
  }

  get isCreate() {
    return this.action === RouteActions.CREATE;
  }

  edit(contact: Contact) {
    this.router.navigate([
      'contacts',
      contact.id,
      this.contactService.getFullname(contact),
      'edit'
    ]);
  }

  remove(contact: Contact) {
    this.backendClient.removeContact(contact.id).subscribe(() => {
      this.cancel();
      this.contactService.loadList();
    });
  }

  save(form: NgForm) {
    if (form.value.id) {
      this.backendClient
        .replaceContact(form.value.id, form.value)
        .subscribe(() => {
          this.cancelEdit(form.value);
          this.contactService.loadList();
        });
    } else {
      this.backendClient.createContact(form.value).subscribe(response => {
        console.warn(
          'we do not have a response that can be used to show the details',
          response
        );
        this.contactService.loadList();
        this.cancel();
      });
    }
  }

  cancelEdit(contact: Contact) {
    this.router.navigate([
      'contacts',
      contact.id,
      this.contactService.getFullname(contact)
    ]);
  }

  cancel() {
    this.router.navigate(['contacts']);
  }
}
