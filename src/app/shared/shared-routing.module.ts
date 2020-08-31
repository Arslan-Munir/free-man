import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { BrowseComponent } from "~/app/shared/components/browse/browse.component";
import { SearchComponent } from "~/app/shared/components/search/search.component";
import { FeaturedComponent } from "~/app/shared/components/featured/featured.component";
import { SettingsComponent } from "~/app/shared/components/settings/settings.component";
import { CartComponent } from "~/app/shared/components/cart/cart.component";
import { OrderingFormComponent } from "~/app/shared/components/ordering-form/ordering-form.component";

const routes: Routes = [
    {path: "browse", component: BrowseComponent},
    {path: "search", component: SearchComponent},
    {path: "featured", component: FeaturedComponent},
    {path: "settings", component: SettingsComponent},
    {path: "cart", component: CartComponent},
    {path: "place-order", component: OrderingFormComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class SharedRoutingModule {
}
