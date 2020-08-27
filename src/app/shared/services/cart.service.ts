import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "~/app/shared/models/product.model";

@Injectable({
    providedIn: "root"
})
export class CartService {
    private products: Array<Product> = [];
    private subject = new Subject<any>();
    private cartItemCount = 0;

    constructor() {
    }

    add(product: Product) {
        this.products.push(product);
        this.cartItemCount = this.products.length;
        this.notifyForCartCount();
    }

    getCartProducts(): Array<Product> {
        return this.products;
    }

    notifyForCartCount() {
        this.subject.next(this.cartItemCount);
    }

    getCartCount(): Observable<number> {
        return this.subject.asObservable();
    }
}

