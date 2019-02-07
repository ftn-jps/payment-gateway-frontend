import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CreditCardComponent } from "./components/credit-card/credit-card.component";
import { CryptoCurrencyComponent } from "./components/crypto-currency/crypto-currency.component";
import { PaypalComponent } from "./components/paypal/paypal.component";
import { HomeComponent } from "./components/home/home.component";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PaypalSuccessComponent } from './components/paypal/paypal-success/paypal-success.component';
import { PaypalFailureComponent } from './components/paypal/paypal-failure/paypal-failure.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriptionSuccessComponent } from './components/subscription/subscription-success/subscription-success.component';
import { NewMerchantComponent } from './components/new-merchant/new-merchant.component';


const appRoutes: Routes = 
[
    {path: '', component: HomeComponent},
    {path: 'credit-card/:token', component: CreditCardComponent},
    {path: 'crypto-currency', component: CryptoCurrencyComponent},
    {path: 'paypal-create-payment/:token', component: PaypalComponent},
    {path: 'paypal/success/:token', component: PaypalSuccessComponent},
    {path: 'paypal/failure/:token', component: PaypalFailureComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    {path: 'subscription', component: SubscriptionComponent},
    {path: 'subscription/success', component: SubscriptionSuccessComponent},
    {path: 'new-merchant', component: NewMerchantComponent},
    {path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }