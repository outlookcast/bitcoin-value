import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';

import { Trader } from './trader';
import { TraderRepository } from './repository';

@Injectable()
export class TraderService {
  constructor(
    private http: Http,
    private traderRepository: TraderRepository
  ) {}

  ticker = (trader: Trader) => {
    return this.http.get(trader.url).toPromise().then(response => {
      const data = response.json();
      const ticker = data.ticker || data.data || data;

      return {
        name: trader.name,
        high: ticker.high,
        low: ticker.low,
        vol: Number(ticker.volume || ticker.vol),
        last: ticker.last,
        buy: ticker.ask || ticker.buy,
        sell: ticker.bid || ticker.sell
      }
    });
  }

  tickers = () => {
    const traders = this.traderRepository.all();
    return Promise.all(traders.map(this.ticker))
  }
}
