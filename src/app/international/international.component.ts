import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http/src/http';
@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.css']
})
export class InternationalComponent implements OnInit {

  PoloniexData:any[] = [];
  PoloniexVol:any[] = [];

  constructor(private http: Http) {
    this.http.get('https://poloniex.com/public?command=returnTicker').subscribe(data => {
      let poloniex = data.json();
      for (var key in poloniex) {
        Object.assign(poloniex[key],{name:key});
        poloniex[key]['percentChange'] = Number(poloniex[key]['percentChange']);
        this.PoloniexData.push(poloniex[key]);
      }
    });

    this.http.get('https://poloniex.com/public?command=return24hVolume').subscribe(data => {
      let poloniex = data.json();
      console.log(poloniex);
    });
  }

  verify(number){
    if(number<0){
      return false;
    }
    else{
      return true;
    }
  }

  aprox(num){
    return num.toFixed(2);
  }
  ngOnInit() {
  }

}
