"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic(); // plateform Browser
platform.bootstrapModule(app_module_1.AppModule); // App bootstrapping is a separate concern from creating a module or presenting a view
//# sourceMappingURL=main.js.map