import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule}from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import {Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({

      apiKey: "AIzaSyBywaVqVRioMPZGYW3SmZlMKxsPUR2qejE",
    authDomain: "parenteye-c3377.firebaseapp.com",
    databaseURL: "https://parenteye-c3377.firebaseio.com",
    projectId: "parenteye-c3377",
    storageBucket: "parenteye-c3377.appspot.com",
    messagingSenderId: "388371835699"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
   
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
