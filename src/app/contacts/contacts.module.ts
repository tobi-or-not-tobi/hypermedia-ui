import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksModule } from '../links/links.module';
import { ContactDetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { PaginationModule } from '../pagination/pagination.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './form/form.component';
import { ContactsService } from './contacts.service';
const routes: Routes = [
  {
    path: 'contacts',
    component: ListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LinksModule,
    PaginationModule,
    FormsModule
  ],
  declarations: [ContactDetailsComponent, ListComponent, ContactFormComponent],
  providers: [ContactsService]
})
export class ContactsModule {}
