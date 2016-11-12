import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';


//plateform Browser
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule); //App bootstrapping is a separate concern from creating a module or presenting a view