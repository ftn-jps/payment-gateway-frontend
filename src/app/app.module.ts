import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { HeaderComponent } from './components/header/header.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { CryptoCurrencyComponent } from './components/crypto-currency/crypto-currency.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    HeaderComponent,
    PaypalComponent,
    CryptoCurrencyComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
