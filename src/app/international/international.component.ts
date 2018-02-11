import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.css']
})
export class InternationalComponent implements OnInit {

  constructor() {
    $(".button-collapse").sideNav('hide');      
  }

  ngOnInit() {
  }

}
