import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from '../../services/paypal.service';
import * as moment from 'moment';

@Component({
  selector: 'app-subscription-success',
  templateUrl: './subscription-success.component.html',
  styleUrls: ['./subscription-success.component.css']
})
export class SubscriptionSuccessComponent implements OnInit {

  private token: String;
  private subscriptionToken: string;
  private subscriptionData: any;
  public subscription: any;
  

  constructor(
    private route : ActivatedRoute,
    private paypalService: PaypalService
  ) { }

  ngOnInit() {
    this.subscriptionToken = this.route.snapshot.params['token'];
    this.paypalService.getSubscription(this.subscriptionToken).subscribe( 
      (res: any) => {
        this.subscriptionData = res;
        console.log(res)
        this.token = this.route.snapshot.queryParams.token;
        this.paypalService.executeAgreement(this.token)
          .subscribe( (res:any) => {
            this.subscription = res;
            console.log(res)
            alert("Automatic payment successefully set");
            alert(this.subscriptionData.successUrl +"/"+ moment().add(2,'years'))
            window.location.href = this.subscriptionData.successUrl +"/"+ moment().add(2,'years');
          },
          error => {
            window.location.href = res.errorUrl 
          })
      }
    )

    

  }

}
