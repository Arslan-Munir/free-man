import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "~/app/shared/services/product.service";
import { Product } from "~/app/shared/models/product.model";
import { CartService } from "~/app/shared/services/cart.service";

@Component({
    selector: "product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
    busy = true;
    productId = 0;
    product: Product;
    toDisplayPhoto = "";

    constructor(private route: ActivatedRoute, private productService: ProductService,
                private cartService: CartService) {
        this.productId = +this.route.snapshot.paramMap.get("id");
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.busy = false;
            this.product = this.productService.getAll().find((x) => x.id === this.productId);
            this.product.quantity = 1;
            this.toDisplayPhoto = this.product.mainPhoto;
            this.cartService.notifyForCartCount();
        }, 1000);
    }

    changePhoto(url: string) {
        this.toDisplayPhoto = url;
    }

    addToCart() {
        this.cartService.add(this.product);
    }

    increaseQuantityByOne() {
        this.cartService.increaseQuantityByOne(this.product);
    }

    decreaseQuantityByOne() {
        this.cartService.decreaseQuantityByOne(this.product);
    }
}
