import { Injectable } from '@angular/core'; 
import { PayPalAuthService } from './payPalAuth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class PaypalService {

constructor(private auth: PayPalAuthService, private http: HttpClient) { }



  executePayment(paymentId: string, payerId: string) {
    let body = JSON.stringify( {"payer_id" : payerId});
    console.log(body);

    let token = 'Bearer ' + this.auth.getAccessToken();

    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });
    
    return this.http.post("https://api.sandbox.paypal.com/v1/payments/payment/" + paymentId + "/execute", body, {headers: headers} );
  }
}