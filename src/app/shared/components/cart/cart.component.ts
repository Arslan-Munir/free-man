import { Component, OnInit } from "@angular/core";
import { CartService } from "~/app/shared/services/cart.service";
import { Product } from "~/app/shared/models/product.model";
import { RouterExtensions } from "@nativescript/angular/router";

@Component({
    selector: "cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {

    products: Array<Product> = [];

    constructor(private route: RouterExtensions, public cartService: CartService) {

    }

    ngOnInit(): void {
        this.products = this.cartService.getCartProducts();
    }

    increaseQuantityByOne(product: Product) {
        this.cartService.increaseQuantityByOne(product);
    }

    decreaseQuantityByOne(product: Product) {
        this.cartService.decreaseQuantityByOne(product);
    }

    removeFromCart(product: Product) {
        this.cartService.remove(product);
    }

    placeOrder() {
        this.route.navigateByUrl("place-order");
    }
}
