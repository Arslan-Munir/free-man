import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { Product } from "~/app/shared/models/product.model";

@Injectable({
    providedIn: "root"
})
export class CartService {
    private products: Array<Product> = [];
    private subject = new ReplaySubject<any>();
    private cartItemCount = 0;

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
