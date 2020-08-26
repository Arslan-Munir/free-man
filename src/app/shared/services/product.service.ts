import { Injectable } from "@angular/core";
import { Product } from "~/app/shared/models/product.model";

@Injectable({
    providedIn: "root"
})
export class ProductService {

    getAll(): Array<Product> {

        const name = "Lorem ";
        const price = 100;
        const description =  `<p>Lorem Ipsum is simply <strong>dummy</strong> text of the printing and typesetting industry.&nbsp;</p>
                            <ul>
                                <li>Lorem Ipsum has been the industry&#39;s&nbsp;</li>
                                <li>Standard dummy text ever since the 1500s</li>
                                <li>When an unknown printer took a galley of type</li>
                            </ul>
                          <p>Scrambled it to make a type specimen book. It has survived not only five centuries,
                          but also the leap into electronic typesetting, remaining essentially unchanged.
                          It was popularised in the 1960s with the release of Letraset sheets containing
                          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                          PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing
                          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                          PageMaker including versions of Lorem Ipsum.</p>`;

        const variations = [
            "ab cd",
            "ab cd",
            "ab cd",
            "ab cd",
            "ab cd"
        ];

        const images =  [
            "https://dummyimage.com/600x400/8c8be8/fff.jpg",
            "https://dummyimage.com/600x400/59a8d6/fff.jpg",
            "https://dummyimage.com/600x400/59c5d6/fff.jpg",
            "https://dummyimage.com/600x400/59d6d4/fff.jpg",
            "https://dummyimage.com/600x400/52d8b4/fff.jpg",
            "https://dummyimage.com/600x400/7beda5/fff.jpg"
        ];

        const products = new Array<Product>();

        products.push(new Product(1, name + "1", price, description, variations, images[0], images));
        products.push(new Product(2, name + "2", price, description, variations, images[1], images));
        products.push(new Product(3, name + "3", price, description, variations, images[2], images));
        products.push(new Product(4, name + "4", price, description, variations, images[3], images));
        products.push(new Product(5, name + "5", price, description, variations, images[4], images));
        products.push(new Product(6, name + "6", price, description, variations, images[5], images));

        return products;
    }
}
