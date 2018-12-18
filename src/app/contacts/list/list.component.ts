import { Component, Input } from '@angular/core';
import { HyContact } from 'src/app/typescript-angular-client-generated';

@Component({
  selector: 'app-contact-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() contacts: HyContact[];
}
