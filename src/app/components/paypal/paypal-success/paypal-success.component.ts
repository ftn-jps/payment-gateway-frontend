import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaypalService } from '../../services/paypal.service';
@Component({
  selector: 'app-paypal-success',
  templateUrl: './paypal-success.component.html',
  styleUrls: ['./paypal-success.component.css']
})
export class PaypalSuccessComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private paypalService: PaypalService
    ) { }

  private paymentId: string;
  private token: string;
  private payerID: string;
  private transactionToken: string;
  private transaction : any;
  public executePaymentResponse: any;
  
  ngOnInit() {
    this.paymentId = this.route.snapshot.queryParams.paymentId;
    this.payerID = this.route.snapshot.queryParams.PayerID;
    this.token = this.route.snapshot.queryParams.token;
    this.transactionToken = this.route.snapshot.params['token'];
    this.paypalService.getTransaction(this.transactionToken) .subscribe( 
      (res: any) => {
        this.transaction = res;
      }
    )


  }

  executePayment() {
    this.paypalService.executePayment(this.paymentId,this.payerID).subscribe(
      (response) => {
        this.executePaymentResponse = response;
        console.log(this.executePaymentResponse);
        alert('Payment executed successefully')
        window.location.href = this.transaction.successUrl;
      },
      (error: any) => {
        window.location.href = this.transaction.errorUrl;
      }
    )
  }

}
