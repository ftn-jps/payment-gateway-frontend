import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {

  url : string = "https://localhost:8081/api/transactions";

  constructor(private http: Http) {
   }

   forwardTransactionBitcoin() {
     return this.http.get(this.url + "/111/" + "type/BITCOIN");
   }
   
}