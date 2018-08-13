// import { Injectable } from "@angular/core";
// import { Http, Headers, Response} from "@angular/http";

// import {map } from "rxjs/operators"

// import { Config } from "./config";
// import { Contact } from "./contact";
// import { Observable } from "rxjs";

// @Injectable()
// export class ContactListService {
//   baseUrl = "GET" + "appdata/" + Config.kinveyAppKey + "/context";

//   constructor(private http: Http) {}

//   getContacts() {
      
//     return this.http.get(this.baseUrl, {
//       //headers: this.getCommonHeaders()
//     })
//     .map(res => res.json())
//     .map(data => {
//       let contactList = [];
//       data.forEach((context) => {
//         contactList.push(new Contact(context.id, context.name));
//       });
//       return contactList;
//     })
//     .catch();
//   }

//   getCommonHeaders() {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     headers.append("Authorization", "New");
//     return headers;
//   }

//   handleErrors(error: Response) {
//     console.log(JSON.stringify(error.json()));
//     return Observable.throw(error);
//   }
//  }