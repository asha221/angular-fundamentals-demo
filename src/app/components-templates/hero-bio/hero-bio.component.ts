import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css'],
  // inputs: ['hero: name'],
  // outputs: ['deleteHeroEvent: deleteRequest']
})
export class HeroBioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Un-comment below if, inputs and outputs are defined in the @component decorator.
  //deleteHeroEvent = new EventEmitter();

  @Input('name') hero: any;

  @Output('deleteRequest') deleteHeroEvent = new EventEmitter();

  deleteHero(hero: any) {
    this.deleteHeroEvent.emit(hero);
  }

}
