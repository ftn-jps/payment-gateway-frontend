import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from '../../services/paypal.service';

@Component({
  selector: 'app-subscription-success',
  templateUrl: './subscription-success.component.html',
  styleUrls: ['./subscription-success.component.css']
})
export class SubscriptionSuccessComponent implements OnInit {

  private token: String;
  public subscription: any;

  constructor(
    private route : ActivatedRoute,
    private paypalService: PaypalService
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.queryParams.token;
    this.paypalService.executeAgreement(this.token)
      .subscribe( (res:any) => {
        this.subscription = res;
        console.log(res)
        alert("Automatic payment successefully set");
      },
      error => {
        alert('Error' + error);
      })

  }

}
