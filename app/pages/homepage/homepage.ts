import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';

/*
  Generated class for the HomepagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/homepage/homepage.html',
})
export class HomepagePage {
  baseUrl = 'http://budget.biz.ua/transactions?year=2016&month=9';

  constructor(private navCtrl: NavController, public http: Http) {
    this.init();
  }

  init(){
    this.http.get(this.baseUrl)
      .subscribe(data => {
        console.log(data);
      })
  }

}
