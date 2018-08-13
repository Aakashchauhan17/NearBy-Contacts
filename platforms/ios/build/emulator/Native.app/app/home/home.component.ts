import { Component, OnInit } from "@angular/core";
//import { ContactListService } from "~/home/home.service";
// const Kinvey = require('kinvey-nativescript-sdk');
import {Kinvey, CacheStore} from "kinvey-nativescript-sdk";
import { Button } from "tns-core-modules/ui/button/button";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { filterlistComponent } from "~/filterlist/filterlist.component";
import * as myGlobals from '~/gloabal';
 Kinvey.init({
     appKey: "kid_HkXB1x-XQ",
     appSecret: "311020ed9d26404aaf0e932cad204b03",
 });


interface Contact {
    _id;
    Name:string;
}
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    //providers: [ContactListService]
})
export class HomeComponent implements OnInit {

    public contactList: Array<any> = [];
    dataStore: CacheStore<Contact>;


    constructor(private _routerExtensions: RouterExtensions) {
        this.dataStore = Kinvey.DataStore.collection<Contact>("context");
        // Use the component constructor to inject providers.
    }
    clicked(){
        this._routerExtensions.navigateByUrl('/filterlist');
        // alert("welcome");
            var location = getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
            then(function(loc) {
                if (loc) {
                    myGlobals.UrlComponent.urlArray = loc;
                    console.log("Current location is: " + loc);
                }
            }, function(e){
                console.log("Error: " + e.message);
            });
        
    }

    ngOnInit(): void {
        //console.log("loading");
        if(Kinvey.User.getActiveUser()){
            const subscription = this.dataStore.find()
            .subscribe(data => {
                //console.log(data.length);
                //alert(data.length);
              this.contactList = data;
            }, (error) => {
              alert(error)
            }, () => {
              // ...
            }).catch((e)=>{
                alert(e)
            });
           }
        else{
            
            Kinvey.User.login("admin","admin").then(()=>{
                const subscription = this.dataStore.find()
                .subscribe(data => {
                    //console.log(data.length);
                    //alert(data.length);
                  this.contactList = data;
                }, (error) => {
                  alert(error)
                }, () => {
                  // ...
                });
            }).catch((e)=>{
                alert(e);
            });
        }
        }
        
        
        // Init your component properties here.

    }

