import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `<h3>{{name}}</h3>
             <h3 class="text-success">Class Binding 1</h3>
             <h3 [class]="styleSuccess" class="text-italic">Class Binding 2</h3>
             <h3 [ngClass]="styleClasses">Class Binding 3</h3>
             <h3 [style.color]="'yellow'">Class Binding 4</h3>
             <h3 [style.color]="styleError ? 'yellow' : 'orange'">Class Binding 4</h3>
             <button (click)="greet()">Greet</button>
          
  `,
  styles: [`
   .text-success{
     color: green;
   }
   .text-danger{
     color:red;
   }
   .text-italic{
    font-style: italic;
  }
  `]
})
export class ClassBindingComponent implements OnInit {

  public name = "Class Binding";
  public styleSuccess = "text-success";
  public styleError =false;
  public isItalic = true;
  public styleClasses ={
    "text-success": !this.styleError,
    "text-danger": this.styleError,
    "text-italic": this.isItalic

  }

  constructor() { }

  ngOnInit() {
  }

  greet(){
    console.log("selam")
  }

}
