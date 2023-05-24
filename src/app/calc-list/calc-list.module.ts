import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CalcListRoutingModule } from "./calc-list-routing.module";
import { CalcListComponent } from "./calc-list.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CalcListRoutingModule
    ],
    declarations: [
        CalcListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CalcListModule { }
