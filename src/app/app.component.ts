import { Component } from '@angular/core';
import { ContactsService, GroupsService } from './typescript-angular-client-generated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contacts$;
  groups$;

  constructor(private contactsService: ContactsService,private groupsService: GroupsService) {
    this.contacts$ = this.contactsService.getContacts();

    this.groups$ = this.groupsService.getGroups();
  }
}
