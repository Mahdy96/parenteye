import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { child } from '../../models/child.interface';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-edit-child',
  templateUrl: 'edit-child.html',
})
export class EditChildPage {

  mychild = {} as child;
  childxref : FirebaseObjectObservable<child>;

constructor(public navCtrl: NavController, public navParams: NavParams,
private database: AngularFireDatabase ) {

  this.mychild = this.navParams.data;
  this.childxref = this.database.object('Children' + this.mychild.$Key);
}


EditChild(){

  this.childxref.update(this.mychild);
 this.mychild = {} as child;
 this.navCtrl.pop();
  
}  
  

}
