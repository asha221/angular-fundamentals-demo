import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './reactive/form-control/form-control.component';
import { FormGroupComponent } from './reactive/form-group/form-group.component';
import { NestedFormGroupComponent } from './reactive/nested-form-group/nested-form-group.component';
import { FormBuilderComponent } from './reactive/form-builder/form-builder.component';
import { FormArrayComponent } from './reactive/form-array/form-array.component';



@NgModule({
  declarations: [FormControlComponent, FormGroupComponent, NestedFormGroupComponent, FormBuilderComponent, FormArrayComponent],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
