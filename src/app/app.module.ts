import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressFormComponent } from './Componenet/add-address-form/add-address-form.component';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { DashBoardComponent } from './Componenet/dash-board/dash-board.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressFormComponent,
    DashBoardComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    FormsModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
