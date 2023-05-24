import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CalcInputRoutingModule } from "./calc-input-routing.module";
import { CalcInputComponent } from "./calc-input.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CalcInputRoutingModule
    ],
    declarations: [
        CalcInputComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CalcInputModule { }
