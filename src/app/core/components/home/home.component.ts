import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Carousel, CarouselItem } from "nativescript-carousel";
import { registerElement } from "@nativescript/angular/element-registry";

registerElement("Carousel", () => Carousel);
registerElement("CarouselItem", () => CarouselItem);

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    images = [
        "https://image.shutterstock.com/image-photo/salad-fresh-fruits-berries-600w-100844995.jpg",
        "https://image.shutterstock.com/image-photo/bowl-healthy-fresh-fruit-salad-600w-264191042.jpg",
        "https://image.shutterstock.com/image-photo/tropical-fruit-salad-yoghurt-glass-600w-1052586221.jpg",
        "https://image.shutterstock.com/image-photo/fruit-salad-crystal-bowl-on-600w-621791648.jpg",
        "https://image.shutterstock.com/image-photo/tropical-fruit-salad-yoghurt-glass-600w-1052586221.jpg",
        "https://image.shutterstock.com/image-photo/bowl-healthy-fresh-fruit-salad-600w-264191042.jpg"
    ];

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

}
