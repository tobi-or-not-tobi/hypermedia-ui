export * from './contacts.service';
import { ContactsService } from './contacts.service';
export * from './groups.service';
import { GroupsService } from './groups.service';
export const APIS = [ContactsService, GroupsService];
