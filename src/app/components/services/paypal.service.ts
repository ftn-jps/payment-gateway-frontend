import { Injectable } from '@angular/core'; 
import { PayPalAuthService } from './payPalAuth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class PaypalService {

constructor(private payPalAuth: PayPalAuthService, private http: HttpClient) { }



  executePayment(paymentId: string, payerId: string) {
    let body = JSON.stringify( {"payer_id" : payerId});

    let token = localStorage.getItem('token');
    console.log(token);
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token
    });
    
    return this.http.post("https://api.sandbox.paypal.com/v1/payments/payment/" + paymentId + "/execute", body, {headers: headers} );
  }
}