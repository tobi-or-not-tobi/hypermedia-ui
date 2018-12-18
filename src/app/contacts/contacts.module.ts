import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { LinksModule } from '../links/links.module';
import { ContactDetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { PaginationModule } from '../pagination/pagination.module';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'contacts/:contactId',
    component: ContactDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LinksModule,
    PaginationModule
  ],
  declarations: [ContactsComponent, ContactDetailsComponent, ListComponent],
  exports: [ContactsComponent]
})
export class ContactsModule {}
