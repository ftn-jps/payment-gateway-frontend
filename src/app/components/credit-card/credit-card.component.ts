import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  private token: string;

  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private serverService: ServerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.token = this.route.snapshot.params['token'];
    this.serverService.forwardTransactionBank(this.token).
      subscribe(
        (response: any) => {
          window.location.href = response._body;
        }
      )
  }

}
