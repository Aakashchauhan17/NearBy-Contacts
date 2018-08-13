import {NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {filterlistRoutingModule} from '~/filterlist/filterlist.routes';
import {filterlistComponent} from '~/filterlist/filterlist.component';
// import * as platform from "platform";
// var GMSServices: any;
// if (platform.isIOS) { 
//     GMSServices.provideAPIKey("AIzaSyBiPZ2DrJuIXjozoLSAdk6iUAI_sz6OzMU");
//   }


@NgModule({
    imports:[
        NativeScriptCommonModule,
        filterlistRoutingModule
    ],
    declarations: [filterlistComponent],
    schemas: [NO_ERRORS_SCHEMA]

})
export class filterlistModule{

}