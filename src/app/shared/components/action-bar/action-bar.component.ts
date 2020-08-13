import { Component, Input } from "@angular/core";

@Component({
    selector: "action-bar",
    templateUrl: "./action-bar.component.html"
})
export class ActionBarComponent {
    @Input("android-icon") androidIcon = "font://&#xf0c9;";
    @Input("ios-icon") iosIcon = "&#xf0c9;";
    @Input("text") text = "";
}
