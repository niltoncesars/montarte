import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CalcResultRoutingModule } from "./calc-result.routing.module";
import { CalcResultComponent } from "./calc-result.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CalcResultRoutingModule
    ],
    declarations: [
        CalcResultComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CalcResultModule { }