import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { ServerService } from '../services/server.service';
import { windowTime } from 'rxjs/operators';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
              private serverService: ServerService) { }

  ngOnInit() {
    this.spinner.show();

    this.serverService.forwardTransactionPayPal().subscribe(
        (url: any) => {
          let link = url._body;
          window.location.href = link;
        }
      )
  }

  

}
