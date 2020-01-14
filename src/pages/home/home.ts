import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

    map = 'MapsPage';
    childinfo = 'ChildInfoPage';
    profile = 'ProfilePage';
    


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
