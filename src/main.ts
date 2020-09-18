// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import { registerElement } from "@nativescript/angular/element-registry";
import { LottieView } from "nativescript-lottie";

registerElement("Ripple", () => require("nativescript-ripple").Ripple);
registerElement("LottieView", () => LottieView);

platformNativeScriptDynamic().bootstrapModule(AppModule);
