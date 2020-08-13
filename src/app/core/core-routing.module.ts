import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LandingPageComponent } from "~/app/core/components/landing-page/landing-page.component";

const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "home", component: LandingPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class CoreRoutingModule { }
