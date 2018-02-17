import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';

import { Trader } from './trader';

const traders = [
  new Trader('Mercado Bitcoin', 'https://www.mercadobitcoin.net/api/BTC/ticker/'),
  new Trader('Flot Btc', 'https://api.flowbtc.com:8405/GetTicker/BTCBRL/'),
  new Trader('Negocie Coins', 'https://broker.negociecoins.com.br/api/v3/btcbrl/ticker'),
  new Trader('Bitcointrade', 'https://api.bitcointrade.com.br/v1/public/BTC/ticker/'),
  new Trader('BitcoinToYou', 'https://www.bitcointoyou.com/api/ticker.aspx'),
];

@Injectable()
export class TraderRepository {
  constructor() {}

  find(name: Trader['name']) {
    return traders.find(trader => trader.name === name);
  }

  all() {
    return traders;
  }
}
