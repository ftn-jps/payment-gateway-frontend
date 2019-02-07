import { Component, OnInit, Inject } from '@angular/core';
import { ServerService } from '../services/server.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.css']
})
export class CryptoCurrencyComponent implements OnInit {

  private token : String;

  constructor(
              private serverService: ServerService,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute ) {}

  ngOnInit() {

    this.spinner.show();
    this.token = this.route.snapshot.params['token'];
    console.log('Iz bitcoina token: ' + this.token);
    this.serverService.forwardTransactionBitcoin(this.token)
      .subscribe( 
        (response: any) => {

          window.location.href = response;
          
        },
        (error) => console.log(error) );
  }

}
