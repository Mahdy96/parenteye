import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { childlocation } from '../../models/childlocation';

import {Geolocation} from '@ionic-native/geolocation'


@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {


  locationset = false;
  childlocation: childlocation = new childlocation(30.002632,31.179267);
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private mdlctrl :ModalController, private geolocation : Geolocation) {
  }

  setOnMaps()
  {
      const modal =this.mdlctrl.create('AddChildPage');
      modal.present();
      modal.onDidDismiss((data)=>{
          if(data)
            {
                this.childlocation=data;
                this.locationset = true;
                

            }

      });
  }


  getLocation()
  {
    this.geolocation.getCurrentPosition()
      .then((locationdata)=>{

        this.childlocation.Latitude = locationdata.coords.latitude;
        this.childlocation.Longitude = locationdata.coords.longitude;
        this.locationset = true;
      })     
      .catch((error)=>{

        console.log("Error" + error);
      })
  }
}
