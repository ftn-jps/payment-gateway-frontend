import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from '../../services/paypal.service';
@Component({
  selector: 'app-paypal-success',
  templateUrl: './paypal-success.component.html',
  styleUrls: ['./paypal-success.component.css']
})
export class PaypalSuccessComponent implements OnInit {

  constructor(private route: ActivatedRoute, private paypalService: PaypalService) { }

  private paymentId: string;
  private token: string;
  private payerID: string;
  
  ngOnInit() {
    console.log("usao")
    this.paymentId = this.route.snapshot.queryParams.paymentId;
    this.token = this.route.snapshot.queryParams.token;
    this.payerID = this.route.snapshot.queryParams.PayerID;
    console.log(this.paymentId);
    console.log(this.payerID);
    
  }

  executePayment() {
    this.paypalService.executePayment(this.paymentId,this.payerID).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

}
