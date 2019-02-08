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
      this.token = this.route.snapshot.queryParams.token;

      this.paypalService.executeAgreementOnServer(this.token, this.subscriptionToken)
        .subscribe( (res:any) => {
          this.subscription = res;
          console.log(res)
          alert("Automatic payment successefully set");
          alert(res.url +"/"+ moment().add(2,'years'))
          window.location.href = res.url +"/"+ moment().add(2,'years');
        });
  }

}
