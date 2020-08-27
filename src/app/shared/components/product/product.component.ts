import { Component, OnInit } from "@angular/core";
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
    productId = 0;
    product: Product;
    toDisplayPhoto = "";

    constructor(private route: ActivatedRoute, private productService: ProductService,
                private cartService: CartService) {
        this.productId = +this.route.snapshot.paramMap.get("id");
    }

    ngOnInit(): void {
        this.product = this.productService.getAll().find((x) => x.id === this.productId);
        this.toDisplayPhoto = this.product.mainPhoto;
        this.cartService.notifyForCartCount();
    }

    changePhoto(url: string) {
        this.toDisplayPhoto = url;
    }

    addToCart() {
        this.cartService.add(this.product);
    }
}
