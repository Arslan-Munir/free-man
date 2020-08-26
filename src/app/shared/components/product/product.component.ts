import { Component, OnInit } from "@angular/core";
import { RouterExtensions, PageRoute } from "@nativescript/angular/router";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductService } from "~/app/shared/services/product.service";
import { Product } from "~/app/shared/models/product.model";

@Component({
    selector: "product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit{

    productId = 0;
    product: Product;

    images = [
        "https://dummyimage.com/600x400/8c8be8/fff.jpg",
        "https://dummyimage.com/600x400/59a8d6/fff.jpg",
        "https://dummyimage.com/600x400/59c5d6/fff.jpg",
        "https://dummyimage.com/600x400/59d6d4/fff.jpg",
        "https://dummyimage.com/600x400/52d8b4/fff.jpg",
        "https://dummyimage.com/600x400/7beda5/fff.jpg"
    ];

    toDisplayPhoto = "";

    constructor(private route: ActivatedRoute, private productService: ProductService) {
        this.productId = +this.route.snapshot.paramMap.get("id");
    }

    ngOnInit(): void {
        this.product = this.productService.getAll().find((x) => x.id === this.productId);
        this.toDisplayPhoto = this.product.mainPhoto;
    }

    changePhoto(url: string) {
        this.toDisplayPhoto = url;
    }
}
