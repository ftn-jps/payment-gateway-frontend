import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PayPalAuthService} from '../services/payPalAuth.service'

import { map } from 'rxjs/operators';

@Injectable()
export class ServerService {

  url : string = "https://localhost:8081/api/transactions";

  constructor(private http: Http, private payPalAuthService: PayPalAuthService) {
   }

   forwardTransactionBitcoin(token: String) {
     return this.http.get(this.url + "/" + token + "/" + "type/BITCOIN").pipe(map((response : Response) => {
       const data = response.text();
       return data;
     }));
   }

   forwardTransactionPayPal(token: String) {
    console.log(token);
    console.log('poslao request')
    return this.http.get(this.url + "/" + token + "/" + "type/PAYPAL");
   }
   
   forwardTransactionBank(token: string){
    return this.http.get(this.url + "/" + token +"/" + "type/BANK");
   }
}