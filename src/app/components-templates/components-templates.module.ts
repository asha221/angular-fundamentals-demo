import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DisplayDataInTemplateurlComponent } from './display-data-in-templateurl/display-data-in-templateurl.component';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { DirectivesComponent } from './directives/directives.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';



@NgModule({
  declarations: [DisplayDataInTemplateurlComponent, DisplayDataInTemplateComponent, TemplateSyntaxComponent, DirectivesComponent,DisplayHeroComponent, HeroBioComponent, HeroDetailComponent, CustomEventsComponent, TwoWayBindingComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsTemplatesModule { }
