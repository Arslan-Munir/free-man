import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CoreRoutingModule } from "~/app/core/core-routing.module";
import { HomeComponent } from "~/app/core/components/home/home.component";
import { LandingPageComponent } from "~/app/core/components/landing-page/landing-page.component";
import { CategoryComponent } from "~/app/core/components/category/category.component";
import { SignInComponent } from "~/app/core/components/sign-in/sign-in.component";
import { SharedModule } from "~/app/shared/shared.module";
import { TNSImageModule } from "nativescript-image/angular";
import * as imageModule from "nativescript-image";
import * as applicationModule from "@nativescript/core/application";
import * as platform from "tns-core-modules/platform";
import { TNSCheckBoxModule } from "@nstudio/nativescript-checkbox/angular";
import { CommonModule } from "@angular/common";

declare var GMSServices: any;

if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyCnxLSEGpzzg4SzEv-LFy5UZixZAt-uq58");
}

if (applicationModule.android) {
    applicationModule.on(applicationModule.launchEvent, () => {
        imageModule.initialize({
            isDownsampleEnabled: true
        });
    });
}

@NgModule({
    imports: [
        CoreRoutingModule,
        NativeScriptModule,
        SharedModule,
        TNSImageModule,
        TNSCheckBoxModule,
        CommonModule
    ],
    declarations: [
        LandingPageComponent,
        HomeComponent,
        CategoryComponent,
        SignInComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CoreModule {
}
