import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LazyLoadingDemoComponent } from './lazy-loading-demo/lazy-loading-demo.component';
import { EagerVsLazyLoadingComponent } from './eager-vs-lazy-loading/eager-vs-lazy-loading.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LazyLoadingDemoComponent, EagerVsLazyLoadingComponent]
})
export class ModulesDemoModule { }
