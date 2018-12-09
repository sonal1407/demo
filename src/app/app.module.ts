import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule}from'@angular/forms'

import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { StatusDirective } from './status.directive';
import {TableModule}from'./table/table.module';

@NgModule({
  declarations: [
    AppComponent,
    StatusDirective
  ],
  imports: [
    BrowserModule,
    OrderModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
