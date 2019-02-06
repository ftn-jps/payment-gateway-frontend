import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private url = "https://localhost:8081/api/merchant"

  constructor(
    private http: HttpClient
  ) { }

  addMerchant(merchantData){
    const body = JSON.stringify(merchantData);
    console.log(body)
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.post(this.url + "/add" , body, {headers: headers} );
  }
}
