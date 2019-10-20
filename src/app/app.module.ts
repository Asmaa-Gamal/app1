import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{RouterModule,Routes}from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormComponent} from './form/form.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
 

const appRoutes:Routes =
[
{path:'home', component: HomeComponent},
{path:'', component: HomeComponent},
{path:'join-us', component: JoinUsComponent},
{path:'contact-us', component: ContactUsComponent},
{path:'contacts', component: ContactsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    JoinUsComponent,
    ContactUsComponent,
    ContactsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
