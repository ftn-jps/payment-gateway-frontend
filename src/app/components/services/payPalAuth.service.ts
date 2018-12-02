import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PayPalAuthService {

  url : string = "https://localhost:8081/api/transactions";

  constructor(private http: Http) {
   }

   getAccessToken(){
    // let headers = new Headers();
    // headers.append('Authorization', btoa('ATpIbDWRhS_L3c46Iz9-qgE1l_Iisfg6u4luC-JOPxfp2Klg6VrRz1ANceUgXSH-OTEckdBLwIKrs4Ug:EDDxtGUSysQafC--ODcd8jKoE8ZFNNa3tNB82I4u4lTPU3cNjeV3DsWO8NhE3H1mK46Euz0ZtOD5HNBO'));
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // const body = new HttpParams()
    //     .set
    

    return 'A21AAHs4BIFvUA-gBCQsQuSWdZ4C2orRNZO8zs2QGZ0FLPB4TWeVvA06YmXc40c2kH8ml2lThbWMpMLuSCTLF93tVKYcjdi2g';
}
   
}