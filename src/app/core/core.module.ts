import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CoreRoutingModule } from "~/app/core/core-routing.module";
import { HomeComponent } from "~/app/core/components/home/home.component";
import { LandingPageComponent } from "~/app/core/components/landing-page/landing-page.component";
import { CategoryComponent } from "~/app/core/components/category/category.component";
import { SignInComponent } from "~/app/core/components/sign-in/sign-in.component";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
    imports: [
        CoreRoutingModule,
        NativeScriptModule,
        SharedModule
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
export class CoreModule { }