import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { SubjectsDemoComponent } from './subjects-demo/subjects-demo.component';
import { OperatorsDemoComponent } from './operators-demo/operators-demo.component';
import { DifferentOperatorsComponent } from './different-operators/different-operators.component';



@NgModule({
  declarations: [ObservablesDemoComponent, 
                  SubjectsDemoComponent, 
                  OperatorsDemoComponent,
                  DifferentOperatorsComponent],
  imports: [
    CommonModule
  ]
})
export class RxjsModule { }
