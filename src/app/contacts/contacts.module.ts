import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { LinksModule } from '../links/links.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  imports: [CommonModule, LinksModule, PaginationModule],
  declarations: [ContactsComponent, DetailsComponent, ListComponent],
  exports: [ContactsComponent]
})
export class ContactsModule {}
