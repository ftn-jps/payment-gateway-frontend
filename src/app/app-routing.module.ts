import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { AppComponent } from "./app.component";
import { CreditCardComponent } from "./components/credit-card/credit-card.component";
import { CryptoCurrencyComponent } from "./components/crypto-currency/crypto-currency.component";
import { PaypalComponent } from "./components/paypal/paypal.component";
import { HomeComponent } from "./components/home/home.component";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PaypalSuccessComponent } from './components/paypal/paypal-success/paypal-success.component';
import { PaypalFailureComponent } from './components/paypal/paypal-failure/paypal-failure.component';


const appRoutes: Routes = 
[
    {path: '', component: HomeComponent},
    {path: 'credit-card', component: CreditCardComponent},
    {path: 'crypto-currency', component: CryptoCurrencyComponent},
    {path: 'paypal', component: PaypalComponent},
    {path: 'paypal/success', component: PaypalSuccessComponent},
    {path: 'paypal/failure', component: PaypalFailureComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }