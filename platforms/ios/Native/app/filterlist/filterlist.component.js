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
    filterlistComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
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
                    _this.delay(300);
                    //return this.LocationAwareList.slice();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVybGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRTtBQUN0RSxtRUFBMkQ7QUFDM0QscUVBQXFJO0FBRXJJLDZDQUc4QjtBQUU5QixxQ0FBdUM7QUFpQnZDO0lBUUMsNkJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFOMUIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUV0QixzQkFBaUIsR0FBWSxFQUFFLENBQUM7UUFLbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQWEsU0FBUyxDQUFDLENBQUM7SUFFeEUsQ0FBQztJQUNELG1DQUFLLEdBQUwsVUFBTSxJQUFJO1FBQ04sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDQSxtQ0FBSyxHQUFMLFVBQU0sRUFBVTtRQUNiLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQXZCLENBQXVCLENBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUosc0NBQVEsR0FBUjtRQUNPLDhCQUE4QjtRQURyQyxpQkFrRUE7UUEvRE8sSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7YUFDakMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNYLDJCQUEyQjtZQUMzQixtQkFBbUI7WUFDbkIsSUFBSyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUssS0FBSyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQy9DLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBRWhCLHlDQUF5QztZQUd6QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7WUFDbkIsS0FBSSxD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QyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RHLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFDbEUsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUViLENBQUM7SUE5RlUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQVN5QixpQkFBVTtPQVJ4QixtQkFBbUIsQ0FnRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhHRCxJQWdHQztBQWhHWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7S2ludmV5LCBDYWNoZVN0b3JlfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IGlzRW5hYmxlZCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBnZXRDdXJyZW50TG9jYXRpb24sIHdhdGNoTG9jYXRpb24sIGRpc3RhbmNlLCBjbGVhcldhdGNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHt9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCJcbmltcG9ydCB7XG4gICAgSHR0cENsaWVudCwgSFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBFdmVudFR5cGUsIEh0dHBFcnJvclJlc3BvbnNlLFxuICAgIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBDbGllbnRNb2R1bGUsIEh0dHBQYXJhbXNcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybS9wbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgbXlHbG9iYWxzIGZyb20gJ34vZ2xvYWJhbCc7XG5cbmludGVyZmFjZSBuZXdDb250YWN0e1xuICAgIF9pZDtcbiAgICBNYWlsaW5nU3RyZWV0OnN0cmluZztcbiAgICBNYWlsaW5nQ2l0eTpzdHJpbmc7XG4gICAgTmFtZTpzdHJpbmc7XG4gICAgUGhvbmU6c3RyaW5nO1xuICAgIEVtYWlsOnN0cmluZ1xufVxuIFxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkZpbHRlcmxpc3RcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9maWx0ZXJsaXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vZmlsdGVybGlzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIGZpbHRlcmxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIG5ld0xpc3Q6QXJyYXk8YW55Pj1bXTtcbiAgICBkYXRhU3RvcmU6IENhY2hlU3RvcmU8bmV3Q29udGFjdD47XG4gICAgcHVibGljIExvY2F0aW9uQXdhcmVMaXN0OkFycmF5PGFueT49W107XG4gICAgIFxuXG4gICBcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuZGF0YVN0b3JlID0gS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uPG5ld0NvbnRhY3Q+KFwiY29udGV4dFwiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIG9uVGFwKGNpdHkpe1xuICAgICAgICBhbGVydChjaXR5KTtcbiAgICB9XG4gICAgIGRlbGF5KG1zOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpICk7XG4gICAgfVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiSXQgaXMgY29taW5nXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhU3RvcmUuZmluZCgpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIC8vYWxlcnQoZGF0YS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgbGV0ICBjaXR5bGlzdCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGxldCAgbXlsb2MgPSBteUdsb2JhbHMuVXJsQ29tcG9uZW50LnVybEFycmF5O1xuICAgICAgICAgICAgICAgICAgdGhpcy5uZXdMaXN0ID0gY2l0eWxpc3Q7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTmV3IGxvY2F0aW9uIGlzOiBcIiArIGxvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWJjID0gY2l0eWxpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTG9jYXRpb25Bd2FyZUxpc3Q9W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wLHNpemU9YWJjLmxlbmd0aDtpPHNpemU7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyZWV0ID0gYWJjW2ldLk1haWxpbmdTdHJlZXQgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaXR5ID0gYWJjW2ldLk1haWxpbmdDaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWV0ID0gc3RyZWV0LnJlcGxhY2UoLyArL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5ID0gY2l0eS5yZXBsYWNlKFwiIFwiLFwiJTJGXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9hZGRyZXNzPVwiK3N0cmVldCtjaXR5K1wiJmtleT1BSXphU3lCaVBaMkRySnVJWGpvem9MU0FkazZpVUFJX3N6Nk96TVVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldCh1cmwpLnN1YnNjcmliZSgocmVzcG9uc2U6YW55KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jMiA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQ0lUWSA6IFwiICsgYWJjW2ldLk1haWxpbmdDaXR5ICsgXCIgbGF0aXR1ZGUgOiBcIityZXNwb25zZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQ0lUWSA6IFwiICsgYWJjW2ldLk1haWxpbmdDaXR5ICsgXCIgbG9uZ2l0dWRlIDogXCIrcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKG15bG9jLmxhdGl0dWRlLGxvYzIubGF0LG15bG9jLmxvbmdpdHVkZSxsb2MyLmxuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRpc3RhbmNlPDIwMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRoaXMgaXMgSUY6XCIsYWJjW2ldLk5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB0aGlzLkxvY2F0aW9uQXdhcmVMaXN0LnB1c2goYWJjW2ldLk5hbWUgK1wiIChcIiArIGRpc3RhbmNlICsgXCIpIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuTG9jYXRpb25Bd2FyZUxpc3QucHVzaChhYmNbaV0uRW1haWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgdGhpcy5Mb2NhdGlvbkF3YXJlTGlzdC5wdXNoKGFiY1tpXS5QaG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkxvY2F0aW9uQXdhcmVMaXN0LnB1c2goeyBoZWFkaW5nOiBhYmNbaV0uTmFtZSwgY29udGVudDogYWJjW2ldLkVtYWlsLGNvbnRlbnQxOiBhYmNbaV0uUGhvbmUgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW1haWw6XCIsYWJjW2ldLkVtYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGhvbmVcIixhYmNbaV0uUGhvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbHNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5KDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiB0aGlzLkxvY2F0aW9uQXdhcmVMaXN0LnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ0lUWSA6IFwiICsgYWJjW2ldLk1haWxpbmdDaXR5ICtcIiBzZXJ2ZXIgZXJycm9yIDogXCIrZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5ldyBFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICB0aGlzLkxvY2F0aW9uQXdhcmVMaXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgLy8gICB0aGlzLm5ld0xpc3QubGVuZ3RoID0gMDtcbiBhc3luYyBmdW5jdGlvbiBnZXRNeUxvY2F0aW9uKCl7XG4gICAgIFxuICAgIHZhciBsb2NhdGlvbiA9ICBnZXRDdXJyZW50TG9jYXRpb24oe2Rlc2lyZWRBY2N1cmFjeTogMywgdXBkYXRlRGlzdGFuY2U6IDEwLCBtYXhpbXVtQWdlOiAyMDAwMCwgdGltZW91dDogMjAwMDB9KS5cbiAgICB0aGVuKGZ1bmN0aW9uKGxvYykge1xuICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gIG51bGw7XG4gICAgfSk7XG59XG59XG4gXG4gY2FsY3VsYXRlRGlzdGFuY2UobGF0MTpudW1iZXIsbGF0MjpudW1iZXIsbG9uZzE6bnVtYmVyLGxvbmcyOm51bWJlcil7XG4gICAgbGV0IHAgPSAwLjAxNzQ1MzI5MjUxOTk0MzI5NTsgICAgLy8gTWF0aC5QSSAvIDE4MFxuICAgIGxldCBjID0gTWF0aC5jb3M7XG4gICAgbGV0IGEgPSAwLjUgLSBjKChsYXQxLWxhdDIpICogcCkgLyAyICsgYyhsYXQyICogcCkgKmMoKGxhdDEpICogcCkgKiAoMSAtIGMoKChsb25nMS0gbG9uZzIpICogcCkpKSAvIDI7XG4gICAgbGV0IGRpcyA9ICgxMjc0MiAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpKTsgLy8gMiAqIFI7IFIgPSA2MzcxIGttXG4gICAgcmV0dXJuIGRpcztcblxuICB9XG4gICAgICAgXG59Il19