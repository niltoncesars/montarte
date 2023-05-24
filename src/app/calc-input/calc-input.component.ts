import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import { Calculo, CALCULOS } from './../app.model';

@Component({
    selector: "CalcInput",
    moduleId: module.id,
    templateUrl: "./calc-input.component.html"
})

export class CalcInputComponent {

    calculo: Calculo;

    constructor(private router: RouterExtensions, private route: ActivatedRoute) {
        this.calculo = CALCULOS[parseInt(this.route.snapshot.paramMap.get('id'))];
    }

    public goBack() {
        this.router.backToPreviousPage();
    }

    public goToCalcResult(evt) {
        this.router.navigate(["calc-result"]);
    }

}
