import { Component } from '@angular/core';
import * as moment from 'moment';
import { setInterval } from 'timers';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  date;
  title = 'app works!';
  constructor(){
    $( document ).ready(function(){
      $(".button-collapse").sideNav();
    });
    setInterval(()=>{
      this.date = moment().format('DD/MM/YYYY - HH:mm:ss');
    },1);
  }

  //hide menu after click
  hide(){
    $(".button-collapse").sideNav('hide');
  }
}
