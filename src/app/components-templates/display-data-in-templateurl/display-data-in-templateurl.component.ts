import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-templateurl',
  templateUrl: './display-data-in-templateurl.component.html',
  styleUrls: ['./display-data-in-templateurl.component.css']
})
export class DisplayDataInTemplateurlComponent implements OnInit {

   title: string;
  myHero: string;
  heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { 
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
    let age = 20;    
  }
  
   ngOnInit(): void {
  }

}
