import { Component, OnInit } from "@angular/core";
import { CartService } from "~/app/shared/services/cart.service";
import { Product } from "~/app/shared/models/product.model";

@Component({
    selector: "cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {

    products: Array<Product> = [];

    constructor(public cartService: CartService) {

    }

    ngOnInit(): void {
        this.products = this.cartService.getCartProducts();
    }
}
