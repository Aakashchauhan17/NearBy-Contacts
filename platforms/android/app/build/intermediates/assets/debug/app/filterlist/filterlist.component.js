"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var http_1 = require("@angular/common/http");
var myGlobals = require("~/gloabal");
var filterlistComponent = /** @class */ (function () {
    function filterlistComponent(http) {
        this.http = http;
        this.newList = [];
        this.LocationAwareList = [];
        this.dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("context");
    }
    filterlistComponent.prototype.onTap = function (city) {
        alert(city);
    };
    //  delay(ms: number) {
    //     return new Promise( resolve => setTimeout(resolve, ms) );
    // }
    filterlistComponent.prototype.ngOnInit = function () {
        //console.log("It is coming");
        var _this = this;
        var subscription = this.dataStore.find()
            .subscribe(function (data) {
            //console.log(data.length);
            //alert(data.length
            var citylist = data;
            var myloc = myGlobals.UrlComponent.urlArray;
            _this.newList = citylist;
            //console.log("New location is: " + loc);
            var abc = citylist;
            _this.LocationAwareList = [];
            var _loop_1 = function (i, size) {
                var street = abc[i].MailingStreet;
                var city = abc[i].MailingCity;
                street = street.replace(/ +/g, "");
                city = city.replace(" ", "%2F");
                var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + street + city + "&key=AIzaSyBiPZ2DrJuIXjozoLSAdk6iUAI_sz6OzMU";
                _this.http.get(url).subscribe(function (response) {
                    var loc2 = response.results[0].geometry.location;
                    //    console.log("CITY : " + abc[i].MailingCity + " latitude : "+response.results[0].geometry.location.lat);
                    //    console.log("CITY : " + abc[i].MailingCity + " longitude : "+response.results[0].geometry.location.lng);
                    var distance = _this.calculateDistance(myloc.latitude, loc2.lat, myloc.longitude, loc2.lng);
                    if (distance < 2000) {
                        // console.log("This is IF:",abc[i].Name)
                        //    this.LocationAwareList.push(abc[i].Name +" (" + distance + ") ");
                        //    this.LocationAwareList.push(abc[i].Email);
                        //    this.LocationAwareList.push(abc[i].Phone);
                        _this.LocationAwareList.push({ heading: abc[i].Name, content: abc[i].Email, content1: abc[i].Phone });
                        // console.log("email:",abc[i].Email);
                        // console.log("Phone",abc[i].Phone)
                    }
                    else {
                        // console.log("else")
                    }
                    // this.delay(300);
                    return _this.LocationAwareList.slice();
                }, function (e) {
                    // console.log("CITY : " + abc[i].MailingCity +" server errror : "+e.message);
                });
            };
            for (var i = 0, size = abc.length; i < size; i++) {
                _loop_1(i, size);
            }
        }, function (e) {
            // console.log("New Error: " + e.message);
        });
        //   this.LocationAwareList.length = 0;
        //   this.newList.length = 0;
        function getMyLocation() {
            return __awaiter(this, void 0, void 0, function () {
                var location;
                return __generator(this, function (_a) {
                    location = nativescript_geolocation_1.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 }).
                        then(function (loc) {
                        if (loc) {
                            return loc;
                        }
                        return null;
                    });
                    return [2 /*return*/];
                });
            });
        }
    };
    filterlistComponent.prototype.calculateDistance = function (lat1, lat2, long1, long2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
        return dis;
    };
    filterlistComponent = __decorate([
        core_1.Component({
            selector: "Filterlist",
            moduleId: module.id,
            templateUrl: "./filterlist.component.html",
            styleUrls: ['./filterlist.component.css'],
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], filterlistComponent);
    return filterlistComponent;
}());
exports.filterlistComponent = filterlistComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVybGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRTtBQUN0RSxtRUFBMkQ7QUFDM0QscUVBQXFJO0FBRXJJLDZDQUc4QjtBQUU5QixxQ0FBdUM7QUFpQnZDO0lBUUMsNkJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFOMUIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUV0QixzQkFBaUIsR0FBWSxFQUFFLENBQUM7UUFLbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQWEsU0FBUyxDQUFDLENBQUM7SUFFeEUsQ0FBQztJQUNELG1DQUFLLEdBQUwsVUFBTSxJQUFJO1FBQ04sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCx1QkFBdUI7SUFDdkIsZ0VBQWdFO0lBQ2hFLElBQUk7SUFFUCxzQ0FBUSxHQUFSO1FBQ08sOEJBQThCO1FBRHJDLGlCQWtFQTtRQS9ETyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTthQUNqQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1gsMkJBQTJCO1lBQzNCLG1CQUFtQjtZQUNuQixJQUFLLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSyxLQUFLLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDL0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFFaEIseUNBQXlDO1lBR3pDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztZQUNuQixLQUFJLENBQUMsaUJBQWlCLEdBQUMsRUFBRSxDQUFDO29DQUNsQixDQUFDLEVBQUcsSUFBSTtnQkFDZCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFB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QyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUNsRSxNQUFNLENBQUMsR0FBRyxDQUFDO0lBRWIsQ0FBQztJQTlGVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBU3lCLGlCQUFVO09BUnhCLG1CQUFtQixDQWdHL0I7SUFBRCwwQkFBQztDQUFBLEFBaEdELElBZ0dDO0FBaEdZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtLaW52ZXksIENhY2hlU3RvcmV9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuaW1wb3J0IHsgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIGdldEN1cnJlbnRMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbiwgZGlzdGFuY2UsIGNsZWFyV2F0Y2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQge30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIlxuaW1wb3J0IHtcbiAgICBIdHRwQ2xpZW50LCBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cEV2ZW50VHlwZSwgSHR0cEVycm9yUmVzcG9uc2UsXG4gICAgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCwgSHR0cENsaWVudE1vZHVsZSwgSHR0cFBhcmFtc1xufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBteUdsb2JhbHMgZnJvbSAnfi9nbG9hYmFsJztcblxuaW50ZXJmYWNlIG5ld0NvbnRhY3R7XG4gICAgX2lkO1xuICAgIE1haWxpbmdTdHJlZXQ6c3RyaW5nO1xuICAgIE1haWxpbmdDaXR5OnN0cmluZztcbiAgICBOYW1lOnN0cmluZztcbiAgICBQaG9uZTpzdHJpbmc7XG4gICAgRW1haWw6c3RyaW5nXG59XG4gXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiRmlsdGVybGlzdFwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2ZpbHRlcmxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9maWx0ZXJsaXN0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgZmlsdGVybGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgbmV3TGlzdDpBcnJheTxhbnk+PVtdO1xuICAgIGRhdGFTdG9yZTogQ2FjaGVTdG9yZTxuZXdDb250YWN0PjtcbiAgICBwdWJsaWMgTG9jYXRpb25Bd2FyZUxpc3Q6QXJyYXk8YW55Pj1bXTtcbiAgICAgXG5cbiAgIFxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb248bmV3Q29udGFjdD4oXCJjb250ZXh0XCIpO1xuICAgICAgICBcbiAgICB9XG4gICAgb25UYXAoY2l0eSl7XG4gICAgICAgIGFsZXJ0KGNpdHkpO1xuICAgIH1cbiAgICAvLyAgZGVsYXkobXM6IG51bWJlcikge1xuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykgKTtcbiAgICAvLyB9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJJdCBpcyBjb21pbmdcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFTdG9yZS5maW5kKClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9hbGVydChkYXRhLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICBsZXQgIGNpdHlsaXN0ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0ICBteWxvYyA9IG15R2xvYmFscy5VcmxDb21wb25lbnQudXJsQXJyYXk7XG4gICAgICAgICAgICAgICAgICB0aGlzLm5ld0xpc3QgPSBjaXR5bGlzdDtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJOZXcgbG9jYXRpb24gaXM6IFwiICsgbG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhYmMgPSBjaXR5bGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2NhdGlvbkF3YXJlTGlzdD1bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTAsc2l6ZT1hYmMubGVuZ3RoO2k8c2l6ZTtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHJlZXQgPSBhYmNbaV0uTWFpbGluZ1N0cmVldCAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNpdHkgPSBhYmNbaV0uTWFpbGluZ0NpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlZXQgPSBzdHJlZXQucmVwbGFjZSgvICsvZywgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHkgPSBjaXR5LnJlcGxhY2UoXCIgXCIsXCIlMkZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9XCIrc3RyZWV0K2NpdHkrXCIma2V5PUFJemFTeUJpUFoyRHJKdUlYam96b0xTQWRrNmlVQUlfc3o2T3pNVVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KHVybCkuc3Vic2NyaWJlKChyZXNwb25zZTphbnkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2MyID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJDSVRZIDogXCIgKyBhYmNbaV0uTWFpbGluZ0NpdHkgKyBcIiBsYXRpdHVkZSA6IFwiK3Jlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJDSVRZIDogXCIgKyBhYmNbaV0uTWFpbGluZ0NpdHkgKyBcIiBsb25naXR1ZGUgOiBcIityZXNwb25zZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UobXlsb2MubGF0aXR1ZGUsbG9jMi5sYXQsbXlsb2MubG9uZ2l0dWRlLGxvYzIubG5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGlzdGFuY2U8MjAwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBJRjpcIixhYmNbaV0uTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuTG9jYXRpb25Bd2FyZUxpc3QucHVzaChhYmNbaV0uTmFtZSArXCIgKFwiICsgZGlzdGFuY2UgKyBcIikgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgdGhpcy5Mb2NhdGlvbkF3YXJlTGlzdC5wdXNoKGFiY1tpXS5FbWFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB0aGlzLkxvY2F0aW9uQXdhcmVMaXN0LnB1c2goYWJjW2ldLlBob25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTG9jYXRpb25Bd2FyZUxpc3QucHVzaCh7IGhlYWRpbmc6IGFiY1tpXS5OYW1lLCBjb250ZW50OiBhYmNbaV0uRW1haWwsY29udGVudDE6IGFiY1tpXS5QaG9uZSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbWFpbDpcIixhYmNbaV0uRW1haWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQaG9uZVwiLGFiY1tpXS5QaG9uZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsc2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZGVsYXkoMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxvY2F0aW9uQXdhcmVMaXN0LnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ0lUWSA6IFwiICsgYWJjW2ldLk1haWxpbmdDaXR5ICtcIiBzZXJ2ZXIgZXJycm9yIDogXCIrZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5ldyBFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICB0aGlzLkxvY2F0aW9uQXdhcmVMaXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgLy8gICB0aGlzLm5ld0xpc3QubGVuZ3RoID0gMDtcbiBhc3luYyBmdW5jdGlvbiBnZXRNeUxvY2F0aW9uKCl7XG4gICAgIFxuICAgIHZhciBsb2NhdGlvbiA9ICBnZXRDdXJyZW50TG9jYXRpb24oe2Rlc2lyZWRBY2N1cmFjeTogMywgdXBkYXRlRGlzdGFuY2U6IDEwLCBtYXhpbXVtQWdlOiAyMDAwMCwgdGltZW91dDogMjAwMDB9KS5cbiAgICB0aGVuKGZ1bmN0aW9uKGxvYykge1xuICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gIG51bGw7XG4gICAgfSk7XG59XG59XG4gXG4gY2FsY3VsYXRlRGlzdGFuY2UobGF0MTpudW1iZXIsbGF0MjpudW1iZXIsbG9uZzE6bnVtYmVyLGxvbmcyOm51bWJlcil7XG4gICAgbGV0IHAgPSAwLjAxNzQ1MzI5MjUxOTk0MzI5NTsgICAgLy8gTWF0aC5QSSAvIDE4MFxuICAgIGxldCBjID0gTWF0aC5jb3M7XG4gICAgbGV0IGEgPSAwLjUgLSBjKChsYXQxLWxhdDIpICogcCkgLyAyICsgYyhsYXQyICogcCkgKmMoKGxhdDEpICogcCkgKiAoMSAtIGMoKChsb25nMS0gbG9uZzIpICogcCkpKSAvIDI7XG4gICAgbGV0IGRpcyA9ICgxMjc0MiAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpKTsgLy8gMiAqIFI7IFIgPSA2MzcxIGttXG4gICAgcmV0dXJuIGRpcztcblxuICB9XG4gICAgICAgXG59Il19