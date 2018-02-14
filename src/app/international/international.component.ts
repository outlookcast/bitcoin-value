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
  Best = {name:'',change:0,vol:''};
  Worse = {name:'',change:0,vol:''};

  constructor(private http: Http) {
    this.http.get('https://poloniex.com/public?command=returnTicker').subscribe(data => {
      let poloniex = data.json();
      for (var key in poloniex) {
        Object.assign(poloniex[key],{name:key});
        poloniex[key]['percentChange'] = Number(poloniex[key]['percentChange']);
        this.PoloniexData.push(poloniex[key]);
        let obj = poloniex[key];
        if(this.Best == undefined)
        {
          this.Best.name = obj.name;
          this.Best.vol = obj.quoteVolume;
          this.Best.change = obj.percentChange;
        }
        else if(this.Worse == undefined)
        {
          this.Worse.name = obj.name;
          this.Worse.vol = obj.quoteVolume;
          this.Worse.change = obj.percentChange;
        }
        else if(obj.percentChange> this.Best.change)
        {
          this.Best.name = obj.name;
          this.Best.vol = obj.quoteVolume;
          this.Best.change = obj.percentChange;
        }
        else if(obj.percentChange < this.Worse.change)
        {
          this.Worse.name = obj.name;
          this.Worse.vol = obj.quoteVolume;
          this.Worse.change = obj.percentChange;
        }
      }
      console.log('Best:',this.Best,'Worse', this.Worse)
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

  returnBest(){
    return this.Best.name;
  }
}
