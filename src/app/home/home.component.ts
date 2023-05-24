import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    backgroundImage: string;

    constructor(
        private router: RouterExtensions,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.backgroundImage = "res://background" + (Math.floor((Math.random() * 7) + 1));
    }

    goToCalcList() {
        this.router.navigate(["calc-list"]);
    }

}

