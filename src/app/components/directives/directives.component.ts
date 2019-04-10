import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   headerName= false;

   public color = "yellow";

   public colors = ["red", "green", "orange", "blue", "yellow"];

}
