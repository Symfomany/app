"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tour of Heroes";
        this.clickMessage = '';
        this.values = '';
    }
    AppComponent.prototype.onClickMe = function () {
        this.clickMessage = 'You are my hero!';
    };
    // without strong typing
    AppComponent.prototype.onKey = function (event) {
        this.values += event.target.value + ' | ';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n            <h3>Hye Everyone ...</h3>\n            {{title}} \n             <div class=\"chip\">\n              {{ clickMessage }}\n            </div>\n        \n            <p *ngIf=\"title.length > 30\">There are many heroes!</p>\n            <button class=\"waves-effect waves-light btn\" (click)=\"onClickMe()\">Click me!</button>\n\n      <div class=\"row\">\n        <form class=\"col s12\">\n          <div class=\"row\">\n              <div class=\"input-field col s6\">\n                <input #box  (keyup)=\"onKey($event)\" placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate\">\n                <p>{{box.value}}</p>\n\n\n                <label for=\"first_name\">First Name</label>\n              </div>\n          </div>\n        </form>\n      </div>\n              <p>{{values}}</p>\n\n\n          "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map