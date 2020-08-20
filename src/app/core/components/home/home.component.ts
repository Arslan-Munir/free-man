import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Carousel, CarouselItem } from "nativescript-carousel";
import { registerElement } from "@nativescript/angular/element-registry";
import { RouterLink } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular/router";

registerElement("Carousel", () => Carousel);
registerElement("CarouselItem", () => CarouselItem);

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    images = [];

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
        this.images = [
           "https://dummyimage.com/600x400/8c8be8/fff.jpg",
           "https://dummyimage.com/600x400/59a8d6/fff.jpg",
           "https://dummyimage.com/600x400/59c5d6/fff.jpg",
           "https://dummyimage.com/600x400/59d6d4/fff.jpg",
           "https://dummyimage.com/600x400/52d8b4/fff.jpg",
           "https://dummyimage.com/600x400/7beda5/fff.jpg"
        ];
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    goToProduct() {
        this.routerExtensions.navigateByUrl("/product");
    }
}
