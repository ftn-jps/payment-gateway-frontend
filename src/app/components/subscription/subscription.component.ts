import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {



  private accessToken;
  private token: String;
  public subscriptionId: any;
  public subscription = {
    amount : ""
  };

  constructor(
    private route: ActivatedRoute,
    private subscriptionService: SubscriptionService
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.fragment.split('/')[1];
    console.log(this.token);
  }

  confirm() {
    this.subscriptionService.startSubscription(this.token).subscribe(
      (res:any) => {
        this.accessToken = res.encodedAccessToken;
        localStorage.setItem('token', atob(this.accessToken));
        window.location.href = res.url;
      }
    )
  }



}
