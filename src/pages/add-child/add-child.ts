import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { child } from '../../models/child.interface';
import { childlocation } from '../../models/childlocation';


@IonicPage()
@Component({
  selector: 'page-add-child',
  templateUrl: 'add-child.html',
})
export class AddChildPage {


    mychild = {} as child;
    childref : FirebaseListObservable<child[]>;

    locationset = false;
    childlocation: childlocation = new childlocation(30.002632,31.179267);
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private database: AngularFireDatabase,
private viewctrl : ViewController ) {


    this.childref = this.database.list('Children');
  }


  click(event){

    this.childlocation.Latitude=event.coords.lat;
    this.childlocation.Longitude=event.coords.lng;
    this.locationset = true;
  }

  setlocation(){

    this.viewctrl.dismiss(this.childlocation);
  }



  AddChild(){

    this.childref.push(this.mychild);
    this.mychild = {} as child;
    this.navCtrl.pop();
    
  }  
}
