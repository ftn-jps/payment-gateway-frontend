import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PayPalAuthService} from '../services/payPalAuth.service'

@Injectable()
export class ServerService {

  url : string = "https://localhost:8081/api/transactions";

  constructor(private http: Http, private payPalAuthService: PayPalAuthService) {
   }

   forwardTransactionBitcoin() {
     return this.http.get(this.url + "/111/" + "type/BITCOIN");
   }

   forwardTransactionPayPal() {
    return this.http.get(this.url + "/" + this.payPalAuthService.getAccessToken() +"/" + "type/PAYPAL");
   }
   
}