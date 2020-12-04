import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BankappNavComponent } from './components/bankapp-nav/bankapp-nav.component';
import { MaterialModule } from './material/material.module';
import { BankappBalanceComponent } from './components/bankapp-balance/bankapp-balance.component';
import { BankappMyAcountsComponent } from './components/bankapp-my-acounts/bankapp-my-acounts.component';
import { BankappMovementsComponent } from './components/bankapp-movements/bankapp-movements.component';
import { BankappAcountsComponent } from './components/bankapp-acounts/bankapp-acounts.component';
import { BankappModalComponent } from './components/bankapp-modal/bankapp-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { BankappFooterComponent } from './components/bankapp-footer/bankapp-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankappNavComponent,
    BankappBalanceComponent,
    BankappMyAcountsComponent,
    BankappMovementsComponent,
    BankappAcountsComponent,
    BankappModalComponent,
    BankappFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
