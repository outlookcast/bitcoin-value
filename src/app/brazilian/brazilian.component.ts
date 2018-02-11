import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'app-brazilian',
  templateUrl: './brazilian.component.html',
  styleUrls: ['./brazilian.component.css']
})
export class BrazilianComponent implements OnInit {

  BrazilData:any = [];
  BrazilFee:any = [];

  constructor(private http: Http) {
    this.http.get('https://cors-anywhere.herokuapp.com/https://api.bitvalor.com/v1/ticker.json').subscribe(data => {
      let dataGeral = data.json();
      // console.log(dataGeral)
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.B2U);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.BTD);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.BZX);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.FLW);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.FOX);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.LOC);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.MBT);
      this.BrazilData.push(dataGeral.ticker_24h.exchanges.NEG);
      Object.assign(this.BrazilData[0],{name:'BitcoinToYou'});
      Object.assign(this.BrazilData[1],{name:'BitcoinTrade'});
      Object.assign(this.BrazilData[2],{name:'Braziliex'});
      Object.assign(this.BrazilData[3],{name:'flowBTC'});
      Object.assign(this.BrazilData[4],{name:'Foxbit'});
      Object.assign(this.BrazilData[5],{name:'LocalBitcoins'});
      Object.assign(this.BrazilData[6],{name:'Mercado Bitcoin'});
      Object.assign(this.BrazilData[7],{name:'Negocie Coins'});
    });

    this.http.get('https://cors-anywhere.herokuapp.com/https://api.bitvalor.com/v1/exchanges.json').subscribe(data => {
      let dataGeral = data.json();
      console.log(dataGeral)
      this.BrazilFee.push(dataGeral.ARN);
      this.BrazilFee.push(dataGeral.B2U);
      this.BrazilFee.push(dataGeral.BAS);
      this.BrazilFee.push(dataGeral.BIV);
      this.BrazilFee.push(dataGeral.BSQ);
      this.BrazilFee.push(dataGeral.BTD);
      this.BrazilFee.push(dataGeral.BZX);
      this.BrazilFee.push(dataGeral.FLW);
      this.BrazilFee.push(dataGeral.FOX);
      this.BrazilFee.push(dataGeral.LOC);
      this.BrazilFee.push(dataGeral.MBT);
      this.BrazilFee.push(dataGeral.NEG);
      this.BrazilFee.push(dataGeral.PAX);
    });


  }

  ngOnInit() {
  }

}
