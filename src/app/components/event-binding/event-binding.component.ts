import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  public name = "Event Bindig";

  public selam = "";

  constructor() { }

  ngOnInit() {
  }

  selamlama(){
    console.log('Herkese Selam');
    this.selam = "Event Binding selamlama";
  }

}
