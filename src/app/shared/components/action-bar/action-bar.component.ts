import { Component, Input } from "@angular/core";
import { NavigationOptions } from "~/app/shared/models/enums/navigation-options.model";
import { RouterExtensions } from "@nativescript/angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "action-bar",
    templateUrl: "./action-bar.component.html"
})
export class ActionBarComponent {
    @Input("android-icon") androidIcon = "";
    @Input("ios-icon") iosIcon = "";
    @Input("to-navigate") toNavigate: NavigationOptions = NavigationOptions.GoBack;
    @Input("text") text = "";

    constructor(private routerExtensions: RouterExtensions) {
    }

    openDrawer() {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goBack() {
        this.routerExtensions.back();
    }

    performAction() {
        if (this.toNavigate === NavigationOptions.OpenDrawer) {
            this.openDrawer();
        } else if (this.toNavigate === NavigationOptions.GoBack) {
            this.goBack();
        } else {
            alert("Invalid option");
        }
    }
}
