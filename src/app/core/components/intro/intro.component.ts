import { Component, EventEmitter, Output } from "@angular/core";

const appSettings = require("@nativescript/core/application-settings");

@Component({
    selector: "intro",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.css"]
})
export class IntroComponent {
    images = [];
    @Output("complete-intro") completeIntro: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.images = [
            "https://dummyimage.com/200x200/8c8be8/fff.jpg",
            "https://dummyimage.com/200x200/59a8d6/fff.jpg",
            "https://dummyimage.com/200x200/59c5d6/fff.jpg",
            "https://dummyimage.com/200x200/59d6d4/fff.jpg",
            "https://dummyimage.com/200x200/52d8b4/fff.jpg",
            "https://dummyimage.com/200x200/7beda5/fff.jpg"
        ];
    }

    endIntro() {
        appSettings.setString("showIntro", "false");
        this.completeIntro.emit(true);
    }
}
