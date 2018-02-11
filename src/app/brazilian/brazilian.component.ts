import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'app-brazilian',
  templateUrl: './brazilian.component.html',
  styleUrls: ['./brazilian.component.css']
})
export class BrazilianComponent implements OnInit {

  BrazilData:any = [];

  constructor(private http: Http) {
    this.http.get('https://cors-anywhere.herokuapp.com/https://api.bitvalor.com/v1/ticker.json').subscribe(data => {
      let dataGeral = data.json();
      console.log(dataGeral.ticker_24h.exchanges)
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.B2U);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.BTD);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.BZX);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.FLW);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.FOX);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.LOC);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.MBT);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.NEG);
      Object.assign(this.BrazilData[0],{name:'B2U'});
      Object.assign(this.BrazilData[1],{name:'BTD'});
      Object.assign(this.BrazilData[2],{name:'BZX'});
      Object.assign(this.BrazilData[3],{name:'FLW'});
      Object.assign(this.BrazilData[4],{name:'FOX'});
      Object.assign(this.BrazilData[5],{name:'LOC'});
      Object.assign(this.BrazilData[6],{name:'MBT'});
      Object.assign(this.BrazilData[7],{name:'NEG'});
    });


    console.log('BrazilData',this.BrazilData);
  }

  ngOnInit() {
  }

}
