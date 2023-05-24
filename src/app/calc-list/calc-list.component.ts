import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Calculo, CALCULOS } from './../app.model';

@Component({
    selector: "CalcList",
    moduleId: module.id,
    templateUrl: "./calc-list.component.html"
})

export class CalcListComponent {

    calculos: Calculo[];

    constructor(private router: RouterExtensions) {
        this.calculos = CALCULOS;
    }

    public goBack() {
        this.router.backToPreviousPage();
    }

    goToCalcInput(evt) {
        this.router.navigate(["calc-input",0]);
    }
}
