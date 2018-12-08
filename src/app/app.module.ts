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
import { ServerService } from './components/services/server.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PayPalAuthService } from './components/services/payPalAuth.service';
import { PaypalSuccessComponent } from './components/paypal/paypal-success/paypal-success.component';
import { PaypalFailureComponent } from './components/paypal/paypal-failure/paypal-failure.component';
import { PaypalService } from './components/services/paypal.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    HeaderComponent,
    PaypalComponent,
    CryptoCurrencyComponent,
    HomeComponent,
    ErrorPageComponent,
    PaypalSuccessComponent,
    PaypalFailureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [ServerService,PayPalAuthService, PaypalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
