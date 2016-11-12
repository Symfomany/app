"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
//plateform Browser
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule); //App bootstrapping is a separate concern from creating a module or presenting a view
//# sourceMappingURL=main.js.map