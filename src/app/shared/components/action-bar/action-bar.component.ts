import { Component, Inject, Input, OnInit } from "@angular/core";
import { NavigationOptions } from "~/app/shared/models/enums/navigation-options.model";
import { RouterExtensions } from "@nativescript/angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Device, platformNames } from "@nativescript/core/platform/platform";
import { DEVICE } from "@nativescript/angular/platform-providers";
import { CartService } from "~/app/shared/services/cart.service";

@Component({
    selector: "action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.scss"]
})

export class ActionBarComponent implements OnInit {
    @Input("android-icon") androidIcon = "";
    @Input("ios-icon") iosIcon = "";
    @Input("to-navigate") toNavigate: NavigationOptions = NavigationOptions.GoBack;
    @Input("text") text = "";
    @Input("show-cart") showCart = true;

    cartIcon = String.fromCharCode(0xf291);
    cartItemsCount = 0;

    constructor(@Inject(DEVICE) private device: Device, private routerExtensions: RouterExtensions,
                private cart: CartService) {
        // if (device.os === platformNames.android) {
        //     this.cartIcon = String.fromCharCode(0xf77d);
        // } else if (device.os === platformNames.ios) {
        //     this.cartIcon = String.fromCharCode(0xf77d);
        // }
    }

    ngOnInit(): void {
        this.cart.getCartCount().subscribe((count) => {
            this.cartItemsCount = count;
        });
    }

    openDrawer() {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goBack() {
        this.routerExtensions.back();
    }

    performAction() {
        if (this.toNavigate === NavigationOptions.OpenDrawer) {
            this.openDrawer();
        } else if (this.toNavigate === NavigationOptions.GoBack) {
            this.goBack();
        } else {
            alert("Invalid option");
        }
    }

    goToCart() {
        this.routerExtensions.navigateByUrl("cart");
    }
}
