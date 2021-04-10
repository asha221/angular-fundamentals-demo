import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { EagerVsLazyLoadingComponent } from './eager-vs-lazy-loading/eager-vs-lazy-loading.component';



@NgModule({
  declarations: [LazyLoadingComponent, EagerVsLazyLoadingComponent],
  imports: [
    CommonModule
  ]
})
export class NgmodulesModule { }
