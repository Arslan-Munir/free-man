import { Component, OnInit } from "@angular/core";
import { TabOptions } from "~/app/shared/models/tab-options";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "landing-page",
    templateUrl: "./landing-page.component.html"
})
export class LandingPageComponent implements OnInit {
    tabOption: TabOptions = TabOptions.Home;
    text = "Home";

    constructor() {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    changeTabView(option: TabOptions, actionBarText: string) {
        this.text = actionBarText;
        this.tabOption = option;
    }
}
