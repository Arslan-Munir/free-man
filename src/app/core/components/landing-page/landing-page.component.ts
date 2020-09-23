import { Component } from "@angular/core";
import { TabOptions } from "~/app/shared/models/tab-options";
import { NavigationOptions } from "~/app/shared/models/enums/navigation-options.model";
import { Page } from "@nativescript/core/ui/page/page";

const appSettings = require("@nativescript/core/application-settings");

@Component({
    selector: "landing-page",
    templateUrl: "./landing-page.component.html"
})
export class LandingPageComponent {
    showIntro = true;
    tabOption: TabOptions = TabOptions.Home;
    text = "Home";
    openDrawer = NavigationOptions.OpenDrawer;

    constructor(private page: Page) {
        // page.actionBarHidden = true;
        const intro = appSettings.getString("showIntro");
        if (!intro) {
            appSettings.setString("showIntro", "true");
            page.actionBarHidden = true;
            this.showIntro = true;
        } else {
            page.actionBarHidden = false;
            this.showIntro = false;
        }
    }

    changeTabView(option: TabOptions, actionBarText: string) {
        this.text = actionBarText;
        this.tabOption = option;
    }

    completeIntro(isIntroCompleted: boolean) {
        if (isIntroCompleted) {
            this.showIntro = false;
            this.page.actionBarHidden = false;
        }
    }
}
