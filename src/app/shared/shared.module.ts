import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { BrowseComponent } from "~/app/shared/components/browse/browse.component";
import { SearchComponent } from "~/app/shared/components/search/search.component";
import { SettingsComponent } from "~/app/shared/components/settings/settings.component";
import { FeaturedComponent } from "~/app/shared/components/featured/featured.component";
import { SharedRoutingModule } from "~/app/shared/shared-routing.module";
import { ActionBarComponent } from "~/app/shared/components/action-bar/action-bar.component";
import { LabelMaxLinesDirective } from "~/app/shared/directives/label-max-lines.directive";
import { ProductComponent } from "~/app/shared/components/product/product.component";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { CartComponent } from "~/app/shared/components/cart/cart.component";

@NgModule({
    imports: [
        SharedRoutingModule,
        NativeScriptModule
    ],
    declarations: [
        BrowseComponent,
        SearchComponent,
        SettingsComponent,
        FeaturedComponent,
        ActionBarComponent,
        ProductComponent,
        CartComponent,
        LabelMaxLinesDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        BrowseComponent,
        SearchComponent,
        SettingsComponent,
        FeaturedComponent,
        ActionBarComponent,
        ProductComponent,
        LabelMaxLinesDirective
    ]
})
export class SharedModule { }
