import { Component } from '@angular/core';
import { HyContacts } from 'src/app/typescript-angular-client-generated';
import { Observable } from 'rxjs';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ContactListComponent {
  public data$: Observable<HyContacts>;

  constructor(private contactService: ContactsService) {
    this.data$ = contactService.contacts$;
  }
}
