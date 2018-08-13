"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var filterlist_component_1 = require("~/filterlist/filterlist.component");
exports.routes = [
    { path: '', component: filterlist_component_1.filterlistComponent }
];
var filterlistRoutingModule = /** @class */ (function () {
    function filterlistRoutingModule() {
    }
    filterlistRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(exports.routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], filterlistRoutingModule);
    return filterlistRoutingModule;
}());
exports.filterlistRoutingModule = filterlistRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVybGlzdC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXJsaXN0LnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsMEVBQXFFO0FBRXhELFFBQUEsTUFBTSxHQUFXO0lBQzFCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUMsMENBQW1CLEVBQUM7Q0FDN0MsQ0FBQztBQU9GO0lBQUE7SUFBcUMsQ0FBQztJQUF6Qix1QkFBdUI7UUFMbkMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLGNBQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBRXRDLENBQUM7T0FDVyx1QkFBdUIsQ0FBRTtJQUFELDhCQUFDO0NBQUEsQUFBdEMsSUFBc0M7QUFBekIsMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge2ZpbHRlcmxpc3RDb21wb25lbnR9IGZyb20gJ34vZmlsdGVybGlzdC9maWx0ZXJsaXN0LmNvbXBvbmVudCdcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDpmaWx0ZXJsaXN0Q29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG5cbn0pXG5leHBvcnQgY2xhc3MgZmlsdGVybGlzdFJvdXRpbmdNb2R1bGV7fSJdfQ==