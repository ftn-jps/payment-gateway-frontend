import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PayPalAuthService {

  url : string = "https://localhost:8081/api/transactions";

  constructor(private http: HttpClient) {
   }

   public token: string;

   getAccessToken(): any{
    if (this.token){
      console.log("string poslat")
      return this.token;
    } 
    let body = 'grant_type=client_credentials';

    let headers = new HttpHeaders();
    console.log(btoa('ATpIbDWRhS_L3c46Iz9-qgE1l_Iisfg6u4luC-JOPxfp2Klg6VrRz1ANceUgXSH-OTEckdBLwIKrs4Ug:EDDxtGUSysQafC--ODcd8jKoE8ZFNNa3tNB82I4u4lTPU3cNjeV3DsWO8NhE3H1mK46Euz0ZtOD5HNBO'));
    headers = headers.append('Authorization', "Basic " + btoa('ATpIbDWRhS_L3c46Iz9-qgE1l_Iisfg6u4luC-JOPxfp2Klg6VrRz1ANceUgXSH-OTEckdBLwIKrs4Ug:EDDxtGUSysQafC--ODcd8jKoE8ZFNNa3tNB82I4u4lTPU3cNjeV3DsWO8NhE3H1mK46Euz0ZtOD5HNBO'));
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');

    console.log("observable poslat")
    return this.http.post('https://api.sandbox.paypal.com/v1/oauth2/token',body, {headers: headers});
}
   
}