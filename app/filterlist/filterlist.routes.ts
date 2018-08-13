import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import {filterlistComponent} from '~/filterlist/filterlist.component'

export const routes: Routes = [
    { path: '', component:filterlistComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]

})
export class filterlistRoutingModule{}