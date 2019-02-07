import { Injectable } from '@angular/core'; 
import { PayPalAuthService } from './payPalAuth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class PaypalService {

constructor(private payPalAuth: PayPalAuthService, private http: HttpClient) { }

  getTransaction(token: string){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    
    return this.http.get("https://localhost:8081/api/transactions/getTransaction/"+token ,{headers: headers} );

  } 

  getSubscription(token: string){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    
    return this.http.get("https://localhost:8081/api/subscriptions/getSubscription/"+token ,{headers: headers} );

  } 


  executePayment(paymentId: string, payerId: string) {
    let body = JSON.stringify( {"payer_id" : payerId});

    let token = localStorage.getItem('token');
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token
    });
    
    return this.http.post("https://api.sandbox.paypal.com/v1/payments/payment/" + paymentId + "/execute", body, {headers: headers} );
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



}