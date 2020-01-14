import { Component } from '@angular/core';
import {User} from '../../models/user';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


      user = {

      } as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController
  ,private fireAuth : AngularFireAuth) {
  }

async  Register(user:User){


      try{

    const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email,user.password)

    if (info){
      this.navCtrl.push('HomePage');
    }
  }

  catch(e)
  {
    this.toast.create({
      message: 'All fields are required, Password must be at least 6 chars',
      duration: 5000,
      position: 'top'
    }).present();

  }
  }


  

}
