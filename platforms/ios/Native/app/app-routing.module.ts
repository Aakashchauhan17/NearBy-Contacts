import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
//import {filterlistComponent} from "./filterlist/filterlist.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "filterlist", loadChildren: "./filterlist/filterlist.module#filterlistModule"}
    //{ path: "filterlist", loadChildren: filterlistComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
