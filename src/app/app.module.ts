import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './home/people/people.component';
import { StarshipComponent } from './home/starship/starship.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ViewDetailsPersonComponent } from './home/people/view-details-person/view-details-person.component';
import { ViewDetailsStarshipComponent } from './home/starship/view-details-starship/view-details-starship.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PeopleComponent,
    StarshipComponent,
    NavbarComponent,
    HomeComponent,
    PaginationComponent,
    SpinnerComponent,
    ViewDetailsPersonComponent,
    ViewDetailsStarshipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
