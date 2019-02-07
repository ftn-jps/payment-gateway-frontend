import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MerchantService } from '../services/merchant.service';

@Component({
  selector: 'app-new-merchant',
  templateUrl: './new-merchant.component.html',
  styleUrls: ['./new-merchant.component.css']
})
export class NewMerchantComponent implements OnInit {

  @ViewChild('f') merchantForm: NgForm;

  merchantData = {
    merchantId : String,
    bankUrl: String,
    paypalClient: String,
    paypalSecret: String,
    bitcoinToken: String
  }

  constructor(
    private merchantService:MerchantService
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this.merchantData.merchantId = this.merchantForm.value.merchantId;
    this.merchantData.bankUrl = this.merchantForm.value.bankUrl;
    this.merchantData.paypalClient = this.merchantForm.value.paypalClient;
    this.merchantData.paypalSecret = this.merchantForm.value.paypalSecret;
    this.merchantData.bitcoinToken = this.merchantForm.value.bitcoinToken;
    this.merchantService.addMerchant(this.merchantData).subscribe(
      (res: any) => {
        alert("Merchant added successefully!")
      }
    )

  }

}
