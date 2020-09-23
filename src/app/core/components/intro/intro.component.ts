import { Component, EventEmitter, Output } from "@angular/core";

const appSettings = require("@nativescript/core/application-settings");

@Component({
    selector: "intro",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.css"]
})
export class IntroComponent {
    @Output("complete-intro") completeIntro: EventEmitter<boolean> = new EventEmitter();

    endIntro() {
        appSettings.setString("showIntro", "false");
        this.completeIntro.emit(true);
    }
}
