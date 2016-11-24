import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const platform = platformBrowserDynamic(); // plateform Browser
platform.bootstrapModule(AppModule); // App bootstrapping is a separate concern from creating a module or presenting a view