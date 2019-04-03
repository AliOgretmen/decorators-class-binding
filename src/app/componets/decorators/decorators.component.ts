import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorators',
  template: `<h3>
            ng exercise
            </h3>
            <h3> Thema: {{name}}</h3>
            <h3>{{siteUrl}}</h3>
            <h3>{{name.toUpperCase()}}</h3>
            <h3>{{themaName()}}</h3>
            <input type="text" value="Name" [id]="newId">
            <br>
            <input type="text" value="Name" id={{newId}} [disabled]="true">

            `,
  styleUrls: []
})
export class DecoratorsComponent implements OnInit {

  public name = "Decorator exercise";
  public siteUrl = window.location.href;
  public newId = "myId";

  constructor() { }

  ngOnInit() {
  }

  themaName(){
    return "bu aksam ki konumuz " + this.name + " olacaktir."
  }

}
