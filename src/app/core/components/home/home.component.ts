import { Component, OnInit } from "@angular/core";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    img = 0;
    imgCarousal = 0;

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

    onImageSwipe() {
        if (this.img === 0) {
            this.img = 1;
            this.imgCarousal = 1;
        } else if (this.img === 1) {
            this.img = 2;
            this.imgCarousal = 2;
        } else if (this.img === 2) {
            this.img = 3;
            this.imgCarousal = 3;
        } else {
            this.img = 0;
            this.imgCarousal = 0;
        }
    }
}
