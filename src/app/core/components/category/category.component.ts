import { Component, OnInit } from "@angular/core";

@Component({
    selector: "category",
    templateUrl: "./category.component.html"
})
export class CategoryComponent implements OnInit{

    busy = true;

    ngOnInit(): void {
        setTimeout(() => {
            this.busy = false;
        }, 2000);
    }
}
