import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "calc-list", loadChildren: "./calc-list/calc-list.module#CalcListModule" },
    { path: "calc-input/:id", loadChildren: "./calc-input/calc-input.module#CalcInputModule" },
    { path: "calc-result", loadChildren: "./calc-result/calc-result.module#CalcResultModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
