import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PayPalAuthService} from '../services/payPalAuth.service'

import { map } from 'rxjs/operators';

@Injectable()
export class ServerService {

  url : string = "https://localhost:8081/api/transactions";

  constructor(private http: Http, private payPalAuthService: PayPalAuthService) {
   }

   forwardTransactionBitcoin() {
     return this.http.get(this.url + "/111/" + "type/BITCOIN").pipe(map((response : Response) => {
       const data = response.text();
       return data;
     }));
   }

   forwardTransactionPayPal() {
    return this.http.get(this.url + "/" + this.payPalAuthService.getAccessToken() +"/" + "type/PAYPAL");
   }
   
}