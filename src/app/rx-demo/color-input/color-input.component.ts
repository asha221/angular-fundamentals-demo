import { Component, Input, OnInit } from '@angular/core';

import { ColorChangeService } from '../color-change.service';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.css']
})
export class ColorInputComponent implements OnInit {

  constructor(private colorChangeService: ColorChangeService) { }

  ngOnInit() {
  }

   color: any = 'blue';

  changeColor() {
    this.colorChangeService.emitColor(this.color);
  }

}
