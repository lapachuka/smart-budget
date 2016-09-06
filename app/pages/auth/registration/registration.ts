import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';


@Component({
  templateUrl: 'build/pages/auth/registration/registration.html'
})
export class RegistrationPage {
  registration: {username?: string, password?: string, rePassword?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {

    }
  }
}
