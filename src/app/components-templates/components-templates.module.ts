import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { DisplayDataInTemplateurlComponent } from './display-data-in-templateurl/display-data-in-templateurl.component';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { DirectivesComponent } from './directives/directives.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HighlightV3Directive } from './attribute-directives/highlight-v3.directive';
import { HighlightV2Directive } from './attribute-directives/highlight-v2.directive';
import { HighlightV1Directive } from './attribute-directives/highlight-v1.directive';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { ReverseIfDirective } from './structural-directive/reverse-if.directive';
import { InteractionComponent } from './interaction/interaction.component';
import { CountdownParentWithTempRefVarComponent } from './countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component';
import { CountdownParentWithViewChildComponent } from './countdown-parent-with-view-child/countdown-parent-with-view-child.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { HttpClient } from '@angular/common/http';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { UserCycleComponent } from './user-cycle/user-cycle.component';
import { LifeycleViewHooksComponent } from './lifeycle-view-hooks/lifeycle-view-hooks.component';
import { LifeycleContentHooksComponent } from './lifeycle-content-hooks/lifeycle-content-hooks.component';
import { UserAfterContentDetailComponent } from './user-after-content-detail/user-after-content-detail.component';
import { UserAfterViewDetailComponent } from './user-after-view-detail/user-after-view-detail.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FormatNamePipe } from './pipes/format-name.pipe';
import { FlyingHeroesPurePipe } from './pipes/flying-heroes-pure.pipe';
import { FlyingHeroesImpurePipe } from './pipes/flying-heroes-impure.pipe';



@NgModule({
  declarations: [DisplayDataInTemplateurlComponent,
    DisplayDataInTemplateComponent,
    TemplateSyntaxComponent,
    DirectivesComponent,
    DisplayHeroComponent,
    HeroBioComponent,
    HeroDetailComponent,
    CustomEventsComponent,
    TwoWayBindingComponent,
    HighlightV3Directive,
    HighlightV2Directive,
    HighlightV1Directive,
    HighlightDirective,
    ReverseIfDirective,
    InteractionComponent,
    CountdownParentWithTempRefVarComponent,
    CountdownParentWithViewChildComponent,
    UserDetailComponent,
    EditUserComponent,
    CountdownTimerComponent,
    SimpleTodoComponent,
    TodoDetailComponent,
    LifecycleHooksComponent,
    UserCycleComponent,
    LifeycleViewHooksComponent,
    LifeycleContentHooksComponent,
    UserAfterContentDetailComponent,
    UserAfterViewDetailComponent,
    PipesComponent,
    ExponentialStrengthPipe,
    FormatNamePipe,
    FlyingHeroesPurePipe,
    FlyingHeroesImpurePipe

    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [HttpClient]

})
export class ComponentsTemplatesModule { }
