import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

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
    this.subscriptionService.getSubscription(this.token).subscribe(
      (res:any) => {
        this.subscription = res;
      }
    )
  }

  confirm() {
    this.subscriptionService.startSubscription(this.token).subscribe(
      (res:any) => {
        console.log(res);
        window.location.href = res.url;
      }
    )
  }



}
