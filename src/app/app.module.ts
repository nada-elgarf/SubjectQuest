import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubjectComponent } from './subject/subject.component';
import { MainComponent } from './main/main.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      SidebarComponent,
      SubjectComponent,
      MainComponent,
      ButtonsComponent,
      FormsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
