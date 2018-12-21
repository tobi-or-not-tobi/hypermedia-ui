import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksModule } from '../links/links.module';
import { ContactDetailsComponent } from './details/details.component';
import { ContactListComponent } from './list/list.component';
import { PaginationModule } from '../pagination/pagination.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactsService } from './contacts.service';
import { RouteActions } from './actions';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactListComponent,
    children: [
      {
        path: RouteActions.CREATE,
        component: ContactDetailsComponent,
        data: {
          action: RouteActions.CREATE
        }
      },
      {
        path: ':contactId',
        component: ContactDetailsComponent,
        data: {
          action: RouteActions.VIEW
        }
      },
      {
        path: ':contactId/' + RouteActions.EDIT,
        component: ContactDetailsComponent,
        data: {
          action: RouteActions.EDIT
        }
      }
    ]
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
  declarations: [ContactDetailsComponent, ContactListComponent],
  providers: [ContactsService]
})
export class ContactsModule {}
