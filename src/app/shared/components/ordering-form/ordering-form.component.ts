import { Component } from "@angular/core";
import { CartService } from "~/app/shared/services/cart.service";
import { OrderingService } from "~/app/shared/services/OrderingService";

@Component({
    selector: "ordering-form",
    templateUrl: "./ordering-form.component.html",
    styleUrls: ["./ordering-form.component.scss"]
})

export class OrderingFormComponent {

    constructor(private cartService: CartService, private orderService: OrderingService) {
    }

    calculateOrderSummary() {
        const products = this.cartService.getCartProducts();
        this.orderService.CalculateSummary(products);
    }
}
