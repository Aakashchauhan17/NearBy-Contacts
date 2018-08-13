"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { ContactListService } from "~/home/home.service";
// const Kinvey = require('kinvey-nativescript-sdk');
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("nativescript-angular/router");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var myGlobals = require("~/gloabal");
kinvey_nativescript_sdk_1.Kinvey.init({
    appKey: "kid_HkXB1x-XQ",
    appSecret: "311020ed9d26404aaf0e932cad204b03",
});
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_routerExtensions) {
        this._routerExtensions = _routerExtensions;
        this.contactList = [];
        this.dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("context");
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.clicked = function () {
        this._routerExtensions.navigateByUrl('/filterlist');
        // alert("welcome");
        var location = nativescript_geolocation_1.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 }).
            then(function (loc) {
            if (loc) {
                myGlobals.UrlComponent.urlArray = loc;
                console.log("Current location is: " + loc);
            }
        }, function (e) {
            console.log("Error: " + e.message);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("loading");
        if (kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser()) {
            var subscription = this.dataStore.find()
                .subscribe(function (data) {
                //console.log(data.length);
                //alert(data.length);
                _this.contactList = data;
            }, function (error) {
                alert(error);
            }, function () {
                // ...
            }).catch(function (e) {
                alert(e);
            });
        }
        else {
            kinvey_nativescript_sdk_1.Kinvey.User.login("admin", "admin").then(function () {
                var subscription = _this.dataStore.find()
                    .subscribe(function (data) {
                    //console.log(data.length);
                    //alert(data.length);
                    _this.contactList = data;
                }, function (error) {
                    alert(error);
                }, function () {
                    // ...
                });
            }).catch(function (e) {
                alert(e);
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyREFBMkQ7QUFDM0QscURBQXFEO0FBQ3JELG1FQUEyRDtBQUczRCxzREFBK0Q7QUFDL0QscUVBQXFJO0FBRXJJLHFDQUF1QztBQUN0QyxnQ0FBTSxDQUFDLElBQUksQ0FBQztJQUNSLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFNBQVMsRUFBRSxrQ0FBa0M7Q0FDaEQsQ0FBQyxDQUFDO0FBYUo7SUFNSSx1QkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFKaEQsZ0JBQVcsR0FBZSxFQUFFLENBQUM7UUFLaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQVUsU0FBUyxDQUFDLENBQUM7UUFDakUscURBQXFEO0lBQ3pELENBQUM7SUFDRCwrQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxvQkFBb0I7UUFDaEIsSUFBSSxRQUFRLEdBQUcsNkNBQWtCLENBQUMsRUFBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUM7WUFDOUcsSUFBSSxDQUFDLFVBQVMsR0FBRztZQUNiLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBUyxDQUFDO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFpQ0s7UUFoQ0QseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUM1QixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtpQkFDekMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDWCwyQkFBMkI7Z0JBQzNCLHFCQUFxQjtnQkFDdkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxFQUFFLFVBQUMsS0FBSztnQkFDUCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDZCxDQUFDLEVBQUU7Z0JBQ0QsTUFBTTtZQUNSLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ1osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBQ0osSUFBSSxDQUFBLENBQUM7WUFFRCxnQ0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDcEMsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7cUJBQ3pDLFNBQVMsQ0FBQyxVQUFBLElBQUk7b0JBQ1gsMkJBQTJCO29CQUMzQixxQkFBcUI7b0JBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDLEVBQUUsVUFBQyxLQUFLO29CQUNQLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDZCxDQUFDLEVBQUU7b0JBQ0QsTUFBTTtnQkFDUixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0QsQ0FBQztJQTFESSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUV2QyxDQUFDO3lDQU95Qyx5QkFBZ0I7T0FOOUMsYUFBYSxDQStEckI7SUFBRCxvQkFBQztDQUFBLEFBL0RMLElBK0RLO0FBL0RRLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy9pbXBvcnQgeyBDb250YWN0TGlzdFNlcnZpY2UgfSBmcm9tIFwifi9ob21lL2hvbWUuc2VydmljZVwiO1xuLy8gY29uc3QgS2ludmV5ID0gcmVxdWlyZSgna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnKTtcbmltcG9ydCB7S2ludmV5LCBDYWNoZVN0b3JlfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IGZpbHRlcmxpc3RDb21wb25lbnQgfSBmcm9tIFwifi9maWx0ZXJsaXN0L2ZpbHRlcmxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBteUdsb2JhbHMgZnJvbSAnfi9nbG9hYmFsJztcbiBLaW52ZXkuaW5pdCh7XG4gICAgIGFwcEtleTogXCJraWRfSGtYQjF4LVhRXCIsXG4gICAgIGFwcFNlY3JldDogXCIzMTEwMjBlZDlkMjY0MDRhYWYwZTkzMmNhZDIwNGIwM1wiLFxuIH0pO1xuXG5cbmludGVyZmFjZSBDb250YWN0IHtcbiAgICBfaWQ7XG4gICAgTmFtZTpzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICAvL3Byb3ZpZGVyczogW0NvbnRhY3RMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgY29udGFjdExpc3Q6IEFycmF5PGFueT4gPSBbXTtcbiAgICBkYXRhU3RvcmU6IENhY2hlU3RvcmU8Q29udGFjdD47XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb248Q29udGFjdD4oXCJjb250ZXh0XCIpO1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cbiAgICBjbGlja2VkKCl7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybCgnL2ZpbHRlcmxpc3QnKTtcbiAgICAgICAgLy8gYWxlcnQoXCJ3ZWxjb21lXCIpO1xuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKHtkZXNpcmVkQWNjdXJhY3k6IDMsIHVwZGF0ZURpc3RhbmNlOiAxMCwgbWF4aW11bUFnZTogMjAwMDAsIHRpbWVvdXQ6IDIwMDAwfSkuXG4gICAgICAgICAgICB0aGVuKGZ1bmN0aW9uKGxvYykge1xuICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlHbG9iYWxzLlVybENvbXBvbmVudC51cmxBcnJheSA9IGxvYztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGxvY2F0aW9uIGlzOiBcIiArIGxvYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZGluZ1wiKTtcbiAgICAgICAgaWYoS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpKXtcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuZGF0YVN0b3JlLmZpbmQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgdGhpcy5jb250YWN0TGlzdCA9IGRhdGE7XG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgYWxlcnQoZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEtpbnZleS5Vc2VyLmxvZ2luKFwiYWRtaW5cIixcImFkbWluXCIpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFTdG9yZS5maW5kKClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9hbGVydChkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RMaXN0ID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgYWxlcnQoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cbiAgICB9XG5cbiJdfQ==