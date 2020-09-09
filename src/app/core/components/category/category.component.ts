import { Component, OnInit } from "@angular/core";
import { RadioOption } from "~/app/shared/models/radio-option";

@Component({
    selector: "category",
    templateUrl: "./category.component.html"
})
export class CategoryComponent implements OnInit {

    busy = true;
    radioOptions?: Array<RadioOption>;
    isCheckConfirm = false;
    radioText = "";

    ngOnInit(): void {
        setTimeout(() => {
            this.busy = false;
            this.radioOptions = [
                new RadioOption("Radio option 1"),
                new RadioOption("Radio option 2"),
                new RadioOption("Radio option 3")
            ];
        }, 0);
    }

    toggleCheckConfirm() {
        this.isCheckConfirm = !this.isCheckConfirm;
    }

    changeCheckedRadio(radioOption: RadioOption): void {
        radioOption.selected = !radioOption.selected;
        this.radioText = radioOption.text;

        if (!radioOption.selected) {
            return;
        }

        // uncheck all other options
        this.radioOptions.forEach(option => {
            if (option.text !== radioOption.text) {
                option.selected = false;
            }
        });
    }
}
