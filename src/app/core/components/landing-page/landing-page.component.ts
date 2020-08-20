import { Component } from "@angular/core";
import { TabOptions } from "~/app/shared/models/tab-options";
import { NavigationOptions } from "~/app/shared/models/enums/navigation-options.model";

@Component({
    selector: "landing-page",
    templateUrl: "./landing-page.component.html"
})
export class LandingPageComponent {
    tabOption: TabOptions = TabOptions.Home;
    text = "Home";
    openDrawer = NavigationOptions.OpenDrawer;

    changeTabView(option: TabOptions, actionBarText: string) {
        this.text = actionBarText;
        this.tabOption = option;
    }
}
