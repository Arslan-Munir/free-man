import { Component } from "@angular/core";

@Component({
    selector: "product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"]
})
export class ProductComponent {
    description = `<p>Lorem Ipsum is simply <strong>dummy</strong> text of the printing and typesetting industry.&nbsp;</p>
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
    images = [
        "https://dummyimage.com/600x400/8c8be8/fff.jpg",
        "https://dummyimage.com/600x400/59a8d6/fff.jpg",
        "https://dummyimage.com/600x400/59c5d6/fff.jpg",
        "https://dummyimage.com/600x400/59d6d4/fff.jpg",
        "https://dummyimage.com/600x400/52d8b4/fff.jpg",
        "https://dummyimage.com/600x400/7beda5/fff.jpg"
    ];

    toDisplayPhoto = this.images[0];

    changePhoto(url: string) {
        this.toDisplayPhoto = url;
    }
}
