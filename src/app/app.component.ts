import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: "app",
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    templateUrl: "main.component.html"
})
export class AppComponent {

    private otherTech: Boolean;
    private languages: Array<String>;

    constructor() {
        this.otherTech = false;
        this.languages = ['PHP', 'JS', 'Dart', 'TypeScript', 'Mysql'];
    }

      ngOnInit() {
            console.log('Initial App State');
        }
   
}