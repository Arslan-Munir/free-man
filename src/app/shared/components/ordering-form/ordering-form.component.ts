import { Component, OnInit } from "@angular/core";
import { CartService } from "~/app/shared/services/cart.service";
import { OrderingService } from "~/app/shared/services/OrderingService";
import { Product } from "~/app/shared/models/product.model";

@Component({
    selector: "ordering-form",
    templateUrl: "./ordering-form.component.html",
    styleUrls: ["./ordering-form.component.scss"]
})

export class OrderingFormComponent implements OnInit {

    test: Array<number> = [];
    productsInCart: Array<Product> = [];
    grandTotal = 0;

    constructor(private cartService: CartService, private orderService: OrderingService) {

    }

    ngOnInit(): void {
        for (let i = 0; i < 500; i++) {
            this.test.push(i);
        }
        this.productsInCart = this.cartService.getCartProducts();
        this.productsInCart.forEach((x) => (this.grandTotal = (this.grandTotal + (x.price * x.quantity))));
    }

    calculateOrderSummary() {
        const products = this.cartService.getCartProducts();
        this.orderService.CalculateSummary(products);
    }
}
