import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { ServerService } from '../services/server.service';
import { windowTime } from 'rxjs/operators';
import { PayPalAuthService } from '../services/payPalAuth.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
              private serverService: ServerService,
              private paypalAuth: PayPalAuthService) { }

  ngOnInit() {
    this.spinner.show();

    if (typeof this.paypalAuth.getAccessToken() === 'string'){
      console.log('CUVAJJ TOKEN');
      localStorage.setItem('token',this.paypalAuth.getAccessToken());
      this.serverService.forwardTransactionPayPal(this.paypalAuth.getAccessToken()).subscribe(
        (url: any) => {
          let link = url._body;
          window.location.href = link;
        }
      )
    }

    this.paypalAuth.getAccessToken().subscribe(
      (response: any) => {
        console.log('CUVAJJ TOKEN');
        localStorage.setItem('token',response.access_token);
        this.serverService.forwardTransactionPayPal(response.access_token).subscribe(
          (url: any) => {
            let link = url._body;
            window.location.href = link;
          }
        )
      }
    )
    // .subscribe(
    //     (url: any) => {
    //       let link = url._body;
    //       window.location.href = link;
    //     }
    //   )
  }

  

}
