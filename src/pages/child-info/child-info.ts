import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { child } from '../../models/child.interface';



@IonicPage()
@Component({
  selector: 'page-child-info',
  templateUrl: 'child-info.html',
})
export class ChildInfoPage {


  childref :FirebaseListObservable<child[]>;
  childrenlist : child[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private actionsheet : ActionSheetController,
        private database : AngularFireDatabase) {

          this.childref = this.database.list('Children');


          this.childref.subscribe((Items)=>{
            this.childrenlist=Items;
          });

  }



  gotoAdd(){

    this.navCtrl.push('AddChildPage');
  }


  onItemClick(Child: child)
  {

      this.actionsheet.create({

        title: Child.name,
        buttons:[
          {
            text: 'Edit',
            handler: ()=>{
                    this.navCtrl.push('EditChildPage',Child);

            }
          },
          {
            text: 'Delete',
            handler: ()=>{
              this.childref.remove(Child.$Key);
            }
          },
          {
            text: 'Cancel',
            handler: ()=>{

            }
          }
        ]

      }).present();

  }
}
