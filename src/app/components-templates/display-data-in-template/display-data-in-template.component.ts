import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template',
  template: `
  <h4>{{title}}</h4>
  <h4>My favorite hero is: {{myhero}}</h4>
`,
})
export class DisplayDataInTemplateComponent implements OnInit {

  title = 'Tour of Heroes';
  myhero ='Windstorm';
  constructor() { }

  ngOnInit(): void {
  }

}
