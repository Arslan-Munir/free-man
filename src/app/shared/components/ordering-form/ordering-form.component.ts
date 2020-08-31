import { Component, OnInit } from "@angular/core";
import { CartService } from "~/app/shared/services/cart.service";
import { OrderingService } from "~/app/shared/services/OrderingService";
import { Product } from "~/app/shared/models/product.model";

@Component({
    selector: "ordering-form",
    templateUrl: "./ordering-form.component.html",
    styleUrls: ["./ordering-form.component.scss"]
})

export class OrderingFormComponent implements OnInit{

    productsInCart: Array<Product> = [];

    constructor(private cartService: CartService, private orderService: OrderingService) {
    }

    ngOnInit(): void {
        this.productsInCart = this.cartService.getCartProducts();
    }

    calculateOrderSummary() {
        const products = this.cartService.getCartProducts();
        this.orderService.CalculateSummary(products);
    }
}
