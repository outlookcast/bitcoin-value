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
    this.http.get('https://www.mercadobitcoin.net/api/BTC/ticker/').subscribe(data => {
      let mercadobitcoin = (data.json()).ticker;
      this.BrazilData.push({name:'Mercado Bitcoin',high:mercadobitcoin.high,low:mercadobitcoin.low,vol:mercadobitcoin.vol,last:mercadobitcoin.last,buy:mercadobitcoin.buy,sell:mercadobitcoin.sell});
    });

    this.http.get('https://api.flowbtc.com:8405/GetTicker/BTCBRL/').subscribe(data => {
      let flowbtc = data.json();
      this.BrazilData.push({name:'Flow BTC',high:flowbtc.high,low:flowbtc.low,vol:flowbtc.volume,last:flowbtc.last,buy:flowbtc.ask,sell:flowbtc.bid});
    });


    this.http.get('https://broker.negociecoins.com.br/api/v3/btcbrl/ticker').subscribe(data => {
      let negociecoins = data.json();
      this.BrazilData.push({name:'Negocie Coins',high:negociecoins.high,low:negociecoins.low,vol:negociecoins.vol,last:negociecoins.last,buy:negociecoins.buy,sell:negociecoins.sell});
    });

    this.http.get('https://api.bitcointrade.com.br/v1/public/BTC/ticker/').subscribe(data => {
      let bitcointrade = data.json();
      this.BrazilData.push({name:'Bitcointrade',high:bitcointrade.data.high,low:bitcointrade.data.low,vol:bitcointrade.data.volume,last:bitcointrade.data.last,buy:bitcointrade.data.buy,sell:bitcointrade.data.sell});
    });

    this.http.get('https://www.bitcointoyou.com/api/ticker.aspx').subscribe(data => {
      let bitcointoyou = data.json().ticker
      console.log(bitcointoyou)
      this.BrazilData.push({name:'BitcoinToYou',high:bitcointoyou.high,low:bitcointoyou.low,vol:bitcointoyou.vol,last:bitcointoyou.last,buy:bitcointoyou.buy,sell:bitcointoyou.sell});
    });

  }

  ngOnInit() {
  }

}
