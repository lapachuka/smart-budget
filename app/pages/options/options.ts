import { Component } from '@angular/core';
import {ModalController, Modal, NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {IncomePage} from './income/incomepage'

@Component({
  templateUrl: 'build/pages/options/options.html',
})

export class OptionsPage {
  baseUrl = 'http://budget.biz.ua/accounts';
  constructor(public http: Http, public nav: NavController) {
    this.init();
  }

  goTo(type) {
    switch (type) {
      case 'expenses':
        this.nav.push(IncomePage);
            break;
      case 'income':
        this.nav.push(IncomePage);
        break;
      case 'account':
        this.nav.push(IncomePage);
        break;

    }
  }

  init(){
    this.http.get(this.baseUrl)
      .map(res => res.json())
      .subscribe(resp => {
        console.log(resp.data);
      })
  }
}
