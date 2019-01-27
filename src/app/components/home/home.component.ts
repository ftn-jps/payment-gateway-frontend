import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private token: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.fragment){
      this.token = this.route.snapshot.fragment.split('/')[2];
    }
    
  }


}
