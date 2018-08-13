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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QywwREFBMEQ7QUFFMUQsc0NBQXNDO0FBRXRDLHFDQUFxQztBQUNyQyx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBRXJDLGdCQUFnQjtBQUNoQixvQ0FBb0M7QUFDcEMscUVBQXFFO0FBRXJFLHVDQUF1QztBQUV2QyxvQkFBb0I7QUFFcEIsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyxTQUFTO0FBQ1QsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQiw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDLG1FQUFtRTtBQUNuRSxZQUFZO0FBQ1osNEJBQTRCO0FBQzVCLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsTUFBTTtBQUVOLHlCQUF5QjtBQUN6QixtQ0FBbUM7QUFDbkMsMERBQTBEO0FBQzFELDhDQUE4QztBQUM5QyxzQkFBc0I7QUFDdEIsTUFBTTtBQUVOLG9DQUFvQztBQUNwQyxpREFBaUQ7QUFDakQsc0NBQXNDO0FBQ3RDLE1BQU07QUFDTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuLy8gaW1wb3J0IHttYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG4vLyBpbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcbi8vIGltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuLy8gQEluamVjdGFibGUoKVxuLy8gZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0U2VydmljZSB7XG4vLyAgIGJhc2VVcmwgPSBcIkdFVFwiICsgXCJhcHBkYXRhL1wiICsgQ29uZmlnLmtpbnZleUFwcEtleSArIFwiL2NvbnRleHRcIjtcblxuLy8gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbi8vICAgZ2V0Q29udGFjdHMoKSB7XG4gICAgICBcbi8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwsIHtcbi8vICAgICAgIC8vaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKClcbi8vICAgICB9KVxuLy8gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4vLyAgICAgLm1hcChkYXRhID0+IHtcbi8vICAgICAgIGxldCBjb250YWN0TGlzdCA9IFtdO1xuLy8gICAgICAgZGF0YS5mb3JFYWNoKChjb250ZXh0KSA9PiB7XG4vLyAgICAgICAgIGNvbnRhY3RMaXN0LnB1c2gobmV3IENvbnRhY3QoY29udGV4dC5pZCwgY29udGV4dC5uYW1lKSk7XG4vLyAgICAgICB9KTtcbi8vICAgICAgIHJldHVybiBjb250YWN0TGlzdDtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgpO1xuLy8gICB9XG5cbi8vICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbi8vICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4vLyAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuLy8gICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIk5ld1wiKTtcbi8vICAgICByZXR1cm4gaGVhZGVycztcbi8vICAgfVxuXG4vLyAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbi8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbi8vICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4vLyAgIH1cbi8vICB9Il19