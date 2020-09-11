import { Component, OnInit } from "@angular/core";
import { RadioOption } from "~/app/shared/models/radio-option";
import { SearchBar } from "@nativescript/core/ui/search-bar";

@Component({
    selector: "category",
    templateUrl: "./category.component.html"
})
export class CategoryComponent implements OnInit {

    busy = true;
    radioOptions?: Array<RadioOption>;
    isCheckConfirm = false;
    radioText = "";

    searchPhrase: string;

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

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }
}
