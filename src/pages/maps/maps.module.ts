import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsPage } from './maps';
import { AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    MapsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_0OyT7fQBdXDsmTtMThEeOF4s4_XQZLM'   //old key
      
          //firebase key
     // AIzaSyBywaVqVRioMPZGYW3SmZlMKxsPUR2qejE
    })
  ],
})
export class MapsPageModule {}
