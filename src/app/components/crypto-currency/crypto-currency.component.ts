import { Component, OnInit, Inject } from '@angular/core';
import { ServerService } from '../services/server.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { Response } from '@angular/http';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.css']
})
export class CryptoCurrencyComponent implements OnInit {

  constructor(
              private serverService: ServerService,
              private spinner: NgxSpinnerService ) {}

  ngOnInit() {

    this.spinner.show();

    this.serverService.forwardTransactionBitcoin()
      .subscribe( 
        (response: any) => {

          window.location.href = response;
          
        },
        (error) => console.log(error) );
  }

}
