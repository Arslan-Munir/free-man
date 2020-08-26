import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LandingPageComponent } from "~/app/core/components/landing-page/landing-page.component";
import { ProductComponent } from "~/app/shared/components/product/product.component";

const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "home", component: LandingPageComponent },
    { path: "product/:id", component: ProductComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class CoreRoutingModule { }
