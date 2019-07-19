import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { ViewPetComponent } from './view-pet/view-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllPetsComponent,
    NewPetComponent,
    EditPetComponent,
    ViewPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
