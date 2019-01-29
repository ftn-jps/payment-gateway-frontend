import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  url : string = "https://localhost:8081/api/subscriptions";

  constructor(private http:HttpClient) { }

  getSubscription(token){
    return this.http.get(this.url + "/" + token);
  }

  startSubscription(token: any){
    
    return this.http.get(this.url + "/subscribe/" + token);
  }

}
