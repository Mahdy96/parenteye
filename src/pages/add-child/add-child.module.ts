import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddChildPage } from './add-child';
import { AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    AddChildPage,
  ],
  imports: [
    IonicPageModule.forChild(AddChildPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_0OyT7fQBdXDsmTtMThEeOF4s4_XQZLM'   //old key
      
          //firebase key
     // AIzaSyBywaVqVRioMPZGYW3SmZlMKxsPUR2qejE
    })
  ],
})
export class AddChildPageModule {}
