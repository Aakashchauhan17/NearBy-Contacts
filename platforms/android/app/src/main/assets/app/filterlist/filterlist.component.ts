import { Component, OnInit, Inject, Injectable } from "@angular/core";
import {Kinvey, CacheStore} from "kinvey-nativescript-sdk";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import {} from "nativescript-google-maps-sdk"
import {
    HttpClient, HTTP_INTERCEPTORS, HttpEventType, HttpErrorResponse,
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClientModule, HttpParams
} from "@angular/common/http";
import * as platform from "tns-core-modules/platform/platform";
import * as myGlobals from '~/gloabal';

interface newContact{
    _id;
    MailingStreet:string;
    MailingCity:string;
    Name:string;
    Phone:string;
    Email:string
}
 
@Component({
	selector: "Filterlist",
	moduleId: module.id,
	templateUrl: "./filterlist.component.html",
    styleUrls: ['./filterlist.component.css'],
})
export class filterlistComponent implements OnInit {

    public newList:Array<any>=[];
    dataStore: CacheStore<newContact>;
    public LocationAwareList:Array<any>=[];
     

   
	constructor(private http: HttpClient) {
        this.dataStore = Kinvey.DataStore.collection<newContact>("context");
        
    }
    onTap(city){
        alert(city);
    }
    //  delay(ms: number) {
    //     return new Promise( resolve => setTimeout(resolve, ms) );
    // }

	ngOnInit(): void {
        //console.log("It is coming");
        
        const subscription = this.dataStore.find()
                .subscribe(data => {
                    //console.log(data.length);
                    //alert(data.length
                    let  citylist = data;
                    let  myloc = myGlobals.UrlComponent.urlArray;
                  this.newList = citylist;
                 
                          //console.log("New location is: " + loc);
                        
                           
                          let abc = citylist;
                          this.LocationAwareList=[];
                          for(let i=0,size=abc.length;i<size;i++){
                            let street = abc[i].MailingStreet  
                            let city = abc[i].MailingCity;
                           street = street.replace(/ +/g, "")
                              city = city.replace(" ","%2F");
                              let url = "https://maps.googleapis.com/maps/api/geocode/json?address="+street+city+"&key=AIzaSyBiPZ2DrJuIXjozoLSAdk6iUAI_sz6OzMU"
                              this.http.get(url).subscribe((response:any)=>{
                                   let loc2 = response.results[0].geometry.location;
                                //    console.log("CITY : " + abc[i].MailingCity + " latitude : "+response.results[0].geometry.location.lat);
                                //    console.log("CITY : " + abc[i].MailingCity + " longitude : "+response.results[0].geometry.location.lng);
                                   

                                   var distance = this.calculateDistance(myloc.latitude,loc2.lat,myloc.longitude,loc2.lng);
                                   if(distance<2000){
                                      // console.log("This is IF:",abc[i].Name)
                                    //    this.LocationAwareList.push(abc[i].Name +" (" + distance + ") ");
                                    //    this.LocationAwareList.push(abc[i].Email);
                                    //    this.LocationAwareList.push(abc[i].Phone);
                                       this.LocationAwareList.push({ heading: abc[i].Name, content: abc[i].Email,content1: abc[i].Phone });

                                    // console.log("email:",abc[i].Email);
                                    // console.log("Phone",abc[i].Phone)
                                   }
                                   else{
                                      // console.log("else")
                                   }
                                  // this.delay(300);
                                 return this.LocationAwareList.slice();
                                 
                                },(e) => {
                               // console.log("CITY : " + abc[i].MailingCity +" server errror : "+e.message);
                                });        
                      }
                    
                  }, function(e){
                     // console.log("New Error: " + e.message);
                  });
                //   this.LocationAwareList.length = 0;
                //   this.newList.length = 0;
 async function getMyLocation(){
     
    var location =  getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {
            return loc;
        }
        
        return  null;
    });
}
}
 
 calculateDistance(lat1:number,lat2:number,long1:number,long2:number){
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return dis;

  }
       
}