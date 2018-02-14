import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'app-brazilian',
  templateUrl: './brazilian.component.html',
  styleUrls: ['./brazilian.component.css']
})
export class BrazilianComponent implements OnInit {

  BrazilData:any = [];

  contDownloaded = 0;

  mercadobitcoinD:boolean = false;
  flowbtcD:boolean = false;
  negociecoinsD:boolean = false;
  bitcointradeD:boolean = false;
  bitcointoyouD:boolean = false;
  constructor(private http: Http) {
    this.http.get('https://www.mercadobitcoin.net/api/BTC/ticker/').subscribe(data => {
      let mercadobitcoin = (data.json()).ticker;
      this.BrazilData.push({name:'Mercado Bitcoin',high:mercadobitcoin.high,low:mercadobitcoin.low,vol:Number(mercadobitcoin.vol),last:mercadobitcoin.last,buy:mercadobitcoin.buy,sell:mercadobitcoin.sell});
      this.contDownloaded++;
      this.verify();
      this.mercadobitcoinD = true;
    });

    this.http.get('https://api.flowbtc.com:8405/GetTicker/BTCBRL/').subscribe(data => {
      let flowbtc = data.json();
      this.BrazilData.push({name:'Flow BTC',high:flowbtc.high,low:flowbtc.low,vol:flowbtc.volume,last:flowbtc.last,buy:flowbtc.ask,sell:flowbtc.bid});
      this.contDownloaded++;
      this.verify();
      this.flowbtcD = true;
    });


    this.http.get('https://broker.negociecoins.com.br/api/v3/btcbrl/ticker').subscribe(data => {
      let negociecoins = data.json();
      this.BrazilData.push({name:'Negocie Coins',high:negociecoins.high,low:negociecoins.low,vol:negociecoins.vol,last:negociecoins.last,buy:negociecoins.buy,sell:negociecoins.sell});
      this.contDownloaded++;
      this.verify();
      this.negociecoinsD = true;
    });

    this.http.get('https://api.bitcointrade.com.br/v1/public/BTC/ticker/').subscribe(data => {
      let bitcointrade = data.json();
      this.BrazilData.push({name:'Bitcointrade',high:bitcointrade.data.high,low:bitcointrade.data.low,vol:bitcointrade.data.volume,last:bitcointrade.data.last,buy:bitcointrade.data.buy,sell:bitcointrade.data.sell});
      this.contDownloaded++;
      this.verify();
      this.bitcointradeD = true;
    });

    this.http.get('https://www.bitcointoyou.com/api/ticker.aspx').subscribe(data => {
      let bitcointoyou = data.json().ticker;
      this.BrazilData.push({name:'BitcoinToYou',high:bitcointoyou.high,low:bitcointoyou.low,vol:Number(bitcointoyou.vol),last:bitcointoyou.last,buy:bitcointoyou.buy,sell:bitcointoyou.sell});
      this.contDownloaded++;
      this.verify();
      this.bitcointoyouD = true;
    });
  }

  verify(){
    if(this.contDownloaded == 5)
    {
      let _pieChartLabels= [];
      let _pieChartData= [];
      this.pieChartLabels.length = 0;
      this.pieChartData.length = 0;
      for(let i=0;i<this.BrazilData.length;i++)
      {
        this.pieChartLabels.push(this.BrazilData[i].name);
        _pieChartData.push(this.BrazilData[i].vol);
      }
      this.pieChartData = _pieChartData;
    }
  }

  ngOnInit() {

  }


  public pieChartLabels:string[] = ['Downloading','Downloading','Downloading','Downloading','Downloading'];
  public pieChartData:number[] = [1,1,1,1,1];
  public pieChartType:string = 'pie';
}
