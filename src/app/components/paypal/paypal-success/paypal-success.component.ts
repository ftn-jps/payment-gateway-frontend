import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaypalService } from '../../services/paypal.service';
@Component({
  selector: 'app-paypal-success',
  templateUrl: './paypal-success.component.html',
  styleUrls: ['./paypal-success.component.css']
})
export class PaypalSuccessComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private paypalService: PaypalService) { }

  private paymentId: string;
  private token: string;
  private payerID: string;
  public executePaymentResponse: any;
  
  ngOnInit() {
    console.log("usao")
    this.paymentId = this.route.snapshot.queryParams.paymentId;
    this.payerID = this.route.snapshot.queryParams.PayerID;
    console.log(this.paymentId);
    console.log(this.payerID);
    
  }

  executePayment() {
    this.paypalService.executePayment(this.paymentId,this.payerID).subscribe(
      (response) => {
        this.executePaymentResponse = response;
        console.log(this.executePaymentResponse);
        alert('Payment executed successefully')
        this.router.navigate(['/']);
      },
      (error: any) => {
        alert('Something went wrong. Payment already executed')
      }
    )
  }

}
