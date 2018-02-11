import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-brazilian',
  templateUrl: './brazilian.component.html',
  styleUrls: ['./brazilian.component.css']
})
export class BrazilianComponent implements OnInit {

  constructor() {
    $(".button-collapse").sideNav('hide');      
  }

  ngOnInit() {
  }

}
