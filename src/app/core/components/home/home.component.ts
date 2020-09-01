import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Carousel, CarouselItem } from "nativescript-carousel";
import { registerElement } from "@nativescript/angular/element-registry";
import { RouterExtensions } from "@nativescript/angular/router";
import { ProductService } from "~/app/shared/services/product.service";
import { Product } from "~/app/shared/models/product.model";

registerElement("Carousel", () => Carousel);
registerElement("CarouselItem", () => CarouselItem);

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    busy = true;

    images = [];

    products: Array<Product> = [];

    constructor(private productService: ProductService,
                private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.

    }

    ngOnInit(): void {
        setTimeout(() => {
            this.images = [
                "https://dummyimage.com/600x400/8c8be8/fff.jpg",
                "https://dummyimage.com/600x400/59a8d6/fff.jpg",
                "https://dummyimage.com/600x400/59c5d6/fff.jpg",
                "https://dummyimage.com/600x400/59d6d4/fff.jpg",
                "https://dummyimage.com/600x400/52d8b4/fff.jpg",
                "https://dummyimage.com/600x400/7beda5/fff.jpg"
            ];

            this.products = this.productService.getAll();
            this.busy = false;
        }, 2000);
    }

    goToProduct(product: Product) {
        this.routerExtensions.navigateByUrl(`/product/${product.id}`);
    }

}
