import { Injectable } from '@angular/core'; 
import { PayPalAuthService } from './payPalAuth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  private url = "https://localhost:8081";

constructor(private payPalAuth: PayPalAuthService, private http: HttpClient) { }

  executePaymentOnServer(paymentId: string, payerId: string, transactionToken: string) {
    return this.http.get(
      this.url + 
      "/api/paypal/executePayment/" + 
      paymentId +
      "/" + 
      payerId +
      "/" +
      transactionToken
      );
  }



  executeAgreement(agreementToken : String){

    let token = localStorage.getItem('token');
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token
    });

    return this.http.post("https://api.sandbox.paypal.com/v1/payments/billing-agreements/" 
      + agreementToken + "/agreement-execute", {}, {headers: headers} );
  }

  executeAgreementOnServer(agreementToken: String, subscriptionToken: String) {
    return this.http.get(
      this.url 
      + "/api/subscriptions/executeAgreement/" 
      + agreementToken
      + "/"
      + subscriptionToken
      );
  }



}