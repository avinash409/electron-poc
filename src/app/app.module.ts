import { HomeComponent } from '../app/home/home.component';
import { DBService } from './service/db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { Configuration } from './app.constants';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { ElectronService } from 'ngx-electron';
import { CalculatorComponent } from './calculator/calculator/calculator.component';

const routes: Routes = [
  {path: 'orders', component: OrdersComponent},
  {path: 'test', component: TestComponent},
  {path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    TestComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Configuration,
    ElectronService,
    DBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
