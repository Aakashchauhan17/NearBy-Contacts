"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var filterlist_routes_1 = require("~/filterlist/filterlist.routes");
var filterlist_component_1 = require("~/filterlist/filterlist.component");
// import * as platform from "platform";
// var GMSServices: any;
// if (platform.isIOS) { 
//     GMSServices.provideAPIKey("AIzaSyBiPZ2DrJuIXjozoLSAdk6iUAI_sz6OzMU");
//   }
var filterlistModule = /** @class */ (function () {
    function filterlistModule() {
    }
    filterlistModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                filterlist_routes_1.filterlistRoutingModule
            ],
            declarations: [filterlist_component_1.filterlistComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], filterlistModule);
    return filterlistModule;
}());
exports.filterlistModule = filterlistModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVybGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXJsaXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxzREFBdUU7QUFDdkUsb0VBQXVFO0FBQ3ZFLDBFQUFzRTtBQUN0RSx3Q0FBd0M7QUFDeEMsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6Qiw0RUFBNEU7QUFDNUUsTUFBTTtBQVlOO0lBQUE7SUFFQSxDQUFDO0lBRlksZ0JBQWdCO1FBVDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBQztnQkFDSixpQ0FBd0I7Z0JBQ3hCLDJDQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRSxDQUFDLDBDQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBRTlCLENBQUM7T0FDVyxnQkFBZ0IsQ0FFNUI7SUFBRCx1QkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge2ZpbHRlcmxpc3RSb3V0aW5nTW9kdWxlfSBmcm9tICd+L2ZpbHRlcmxpc3QvZmlsdGVybGlzdC5yb3V0ZXMnO1xuaW1wb3J0IHtmaWx0ZXJsaXN0Q29tcG9uZW50fSBmcm9tICd+L2ZpbHRlcmxpc3QvZmlsdGVybGlzdC5jb21wb25lbnQnO1xuLy8gaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XG4vLyB2YXIgR01TU2VydmljZXM6IGFueTtcbi8vIGlmIChwbGF0Zm9ybS5pc0lPUykgeyBcbi8vICAgICBHTVNTZXJ2aWNlcy5wcm92aWRlQVBJS2V5KFwiQUl6YVN5QmlQWjJEckp1SVhqb3pvTFNBZGs2aVVBSV9zejZPek1VXCIpO1xuLy8gICB9XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOltcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBmaWx0ZXJsaXN0Um91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbZmlsdGVybGlzdENvbXBvbmVudF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG5cbn0pXG5leHBvcnQgY2xhc3MgZmlsdGVybGlzdE1vZHVsZXtcblxufSJdfQ==