import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BASE_PATH,
  HyContact,
  HyLink,
  Contact
} from 'src/app/typescript-angular-client-generated';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactsService } from '../contacts.service';
import { NgForm } from '@angular/forms';

const ENDPOINT = '/contacts';

@Component({
  selector: 'app-contact-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class ContactDetailsComponent {
  @Input() hyLink;
  self;

  details$: Observable<HyContact>;

  model = {
    firstName: undefined,
    lastName: undefined,
    email: undefined
  };

  constructor(private contactService: ContactsService) {
    this.details$ = this.contactService.details$;
  }

  edit(link: HyLink) {
    this.self = this.hyLink;
    this.hyLink = link;
  }

  remove(link: HyLink) {
    this.contactService.delete(link.href);
  }

  save(form: NgForm) {
    if (form.value.id) {
      this.contactService
        .patch(this.hyLink.href, form.value)
        .subscribe(() => this.resetEdit());
    } else {
      this.contactService.post(this.hyLink.href, form.value).subscribe(() => {
        console.warn(
          'we do not have a response that can be used to show the details'
        );
        this.cancel();
      });
    }
  }

  resetEdit() {
    this.hyLink = this.self;
  }

  cancel() {
    this.contactService.clearDetails();
  }
}
