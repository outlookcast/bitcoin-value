import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http/src/http';

import { TraderService } from '../trader';

@Component({
  selector: 'app-brazilian',
  templateUrl: './brazilian.component.html',
  styleUrls: ['./brazilian.component.css']
})
export class BrazilianComponent implements OnInit {
  private tickers : any = []
  private loaded = false

  constructor(
    private http: Http,
    private traderService: TraderService,
  ) { }

  ngOnInit() {
    this.traderService.tickers().then(tickers => {
      this.tickers = tickers;

      this.pieChartLabels = tickers.map(ticker => ticker.name);
      this.pieChartData = tickers.map(ticker => ticker.vol);

      this.loaded = true;
    });
  }

  public pieChartLabels:string[] = ['Downloading','Downloading','Downloading','Downloading','Downloading'];
  public pieChartData:number[] = [1,1,1,1,1];
  public pieChartType:string = 'pie';
}
