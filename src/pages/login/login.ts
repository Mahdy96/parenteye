import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {User} from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  user ={}as User;


  constructor(public navCtrl: NavController, public navParams: NavParams,private toast: ToastController,
     private fireAuth : AngularFireAuth) {
  }

  async  login(user:User){


    try{

  const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email,user.password)

  if (info){
   await this.navCtrl.push('HomePage');
  }
}

catch(e)
{
  this.toast.create({
    message: 'Invalid Email or Password!',
    duration: 3000,
    position: 'top'
  }).present();

}
}

signup(){

  this.navCtrl.push('SignupPage');
}
  
}
