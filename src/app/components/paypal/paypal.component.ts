import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { ServerService } from '../services/server.service';
import { windowTime } from 'rxjs/operators';
import { PayPalAuthService } from '../services/payPalAuth.service';
import { ActivatedRoute } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  private token : String;

  constructor(private spinner: NgxSpinnerService,
              private serverService: ServerService,
              private paypalAuth: PayPalAuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.spinner.show();
    this.token = this.route.snapshot.params['token'];

    this.serverService.forwardTransactionPayPal(this.token)
    .subscribe(
      (res: any) => {
        const encodedToken = res._body.split('\n')[1];
        const encodedAllowPaymentLink = res._body.split('\n')[0]
        localStorage.setItem('token', atob(encodedToken));
        window.location.href = atob(encodedAllowPaymentLink);
      } 
  )
  }

  

}
