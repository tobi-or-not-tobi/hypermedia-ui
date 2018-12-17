import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration, BASE_PATH } from './typescript-angular-client-generated';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, ContactsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ApiModule ],
  providers: [{
    provide: BASE_PATH,
    useValue: 'http://localhost:3000'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
