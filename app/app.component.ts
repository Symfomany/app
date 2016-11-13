import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
            <h3>Hye Everyone ...</h3>
            {{title}} 
             <div class="chip">
              {{ clickMessage }}
            </div>
        
            <p *ngIf="title.length > 30">There are many heroes!</p>
            <button class="waves-effect waves-light btn" (click)="onClickMe()">Click me!</button>

      <div class="row">
        <form class="col s12">
          <div class="row">
              <div class="input-field col s6">
                <input #box  (keyup)="onKey($event)" placeholder="Placeholder" id="first_name" type="text" class="validate">
                <p>{{box.value}}</p>


                <label for="first_name">First Name</label>
              </div>
          </div>
        </form>
      </div>
              <p>{{values}}</p>


          `
})
export class AppComponent {

  title:string = "Tour of Heroes";
  clickMessage = '';
  values = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }


 // without strong typing
  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

 }