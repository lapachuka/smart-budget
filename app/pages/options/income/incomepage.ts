import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/options/income/incomepage.html',
})

export class IncomePage {
  incomes: { id: number, name: string }[];
  baseUrl = 'http://budget.biz.ua/categories?type=income';
  http;


  constructor(public nav: NavController, http:Http) {
    let _build = (<any> http)._backend._browserXHR.build;
    (<any> http)._backend._browserXHR.build = () => {
      let _xhr =  _build();
      _xhr.withCredentials = true;
      return _xhr;
    };

    this.http = http;
    this.getIncomeList();
  }

  clicked(event) {
    console.log('some');
  }

  getIncomeList(){

    this.http.get(this.baseUrl)
      .map(res => res.json())
      .subscribe(resp => {
        this.incomes = resp.data;
      });
  }

  deleteItem(itemId){
    this.http.delete('http://budget.biz.ua/categories/' + itemId + '?type=income')
      .map(res => res.json())
      .subscribe(resp => {
        this.incomes.push(resp.data);
      });
  }

  addNew(newValue){
    console.log('some else');
    this.http.post(this.baseUrl, {'email': 'lapchuk.ol@gmail.com', 'passwrod' :'Sasha123'})
      .subscribe(resp => {
        console.log('some');
      });
    /*this.http.post(this.baseUrl , {name: newValue})
     .map(res => res.json())
     .subscribe(resp => {
     this.incomes.push(resp.data);
     });*/
  }

}

