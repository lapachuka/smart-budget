import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegistrationPage} from '../registration/registration';
import {Http} from '@angular/http';
import {HomepagePage} from "../../homepage/homepage";
import {AlertController} from 'ionic-angular';
import {Cookie} from 'ng2-cookies/ng2-cookies';


@Component({
  templateUrl: 'build/pages/auth/login/login.html'
})

export class LoginPage {

  user:{username?:string, password?:string} = {};
  submitted = false;
  http;

  constructor(public navCtrl:NavController, http:Http, public alertCtrl:AlertController) {
    let _build = (<any> http)._backend._browserXHR.build;
    (<any> http)._backend._browserXHR.build = () => {
      let _xhr =  _build();
      _xhr.withCredentials = true;
      return _xhr;
    };
    this.http = http;
  }

  onLogin(form) {
    this.submitted = true;
    let link = 'http://budget.biz.ua/user/login';

    if (form.valid) {
      this.http.post(link, this.user)
        .subscribe(data => {
          let resp = data.json();
          this.navCtrl.setRoot(HomepagePage);
        }, error => {
          let errMsg = error.json();
          let alert = this.alertCtrl.create({
            title: error.statusText,
            subTitle: errMsg.message,
            buttons: ['OK']
          });
          alert.present();
        });
    }
  }

  onSignup() {
    this.navCtrl.push(RegistrationPage);
  }
}
