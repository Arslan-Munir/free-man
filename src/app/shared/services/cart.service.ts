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
        if (this.existInCart(product)) {
            this.increaseQuantityByOne(product);
        } else {
            this.products.push(product);
            this.cartItemCount = this.products.length;
            this.notifyForCartCount();
        }
    }

    remove(product: Product) {
        const index = this.products.indexOf(product, 0);
        if (index > -1) {
            this.products.splice(index, 1);
        }
        this.cartItemCount = this.products.length;
        this.notifyForCartCount();
    }

    getCartProducts(): Array<Product> {
        return this.products;
    }

    increaseQuantityByOne(product: Product) {
        ++product.quantity;
        product.price = product.price * product.quantity;
    }

    decreaseQuantityByOne(product: Product) {
        if (product.quantity - 1 < 1) {
            return;
        } else {
            --product.quantity;
            product.price = product.price / product.quantity;
        }
    }

    notifyForCartCount() {
        this.subject.next(this.cartItemCount);
    }

    getCartCount(): Observable<number> {
        return this.subject.asObservable();
    }

    private existInCart(product: Product): boolean {
        return this.products.some((p) => p === product);
    }
}
