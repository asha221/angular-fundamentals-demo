import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { ComponentInteractionComponent } from './components-templates/component-interaction/component-interaction.component';
import { DirectivesComponent } from './components-templates/directives/directives.component';
import { DisplayDataInTemplateComponent } from './components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateurlComponent } from './components-templates/display-data-in-templateurl/display-data-in-templateurl.component';
import { LifecycleHooksComponent } from './components-templates/lifecycle-hooks/lifecycle-hooks.component';
import { PipesComponent } from './components-templates/pipes/pipes.component';
import { TemplateSyntaxComponent } from './components-templates/template-syntax/template-syntax.component';
import { CustomEventsComponent } from './components-templates/custom-events/custom-events.component';
import { TwoWayBindingComponent } from './components-templates/two-way-binding/two-way-binding.component';

import { FormArrayComponent } from './forms/reactive/form-array/form-array.component';
import { FormBuilderComponent } from './forms/reactive/form-builder/form-builder.component';
import { FormControlComponent } from './forms/reactive/form-control/form-control.component';
import { FormGroupComponent } from './forms/reactive/form-group/form-group.component';
import { NestedFormGroupComponent } from './forms/reactive/nested-form-group/nested-form-group.component';

import { EagerVsLazyLoadingComponent } from './ngmodules/eager-vs-lazy-loading/eager-vs-lazy-loading.component';
import { LazyLoadingComponent } from './ngmodules/lazy-loading/lazy-loading.component';

import { DifferentOperatorsComponent } from './rxjs/different-operators/different-operators.component';
import { ObservablesDemoComponent } from './rxjs/observables-demo/observables-demo.component';
import { OperatorsDemoComponent } from './rxjs/operators-demo/operators-demo.component';
import { SubjectsDemoComponent } from './rxjs/subjects-demo/subjects-demo.component';

import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  
  /* Components-Templates  module routes*/

  { path: 'components-templates/display-data-in-template', component:  DisplayDataInTemplateComponent },
  { path: 'components-templates/display-data-in-templateurl', component:  DisplayDataInTemplateurlComponent },
  { path: 'components-templates/template-syntax', component:TemplateSyntaxComponent},
  { path: 'components-templates/custom-events', component:CustomEventsComponent},
  { path: 'components-templates/two-way-binding', component:TwoWayBindingComponent},
  { path: 'components-templates/directives', component:DirectivesComponent},
  { path: 'components-templates/component-interaction', component:ComponentInteractionComponent},
  { path: 'components-templates/lifecycle-hooks', component:LifecycleHooksComponent},
  { path: 'components-templates/pipes', component:PipesComponent},

  /* rxjs module routes */
  { path: 'rxjs/observables-demo', component:ObservablesDemoComponent},
  { path: 'rxjs/subjects-demo', component:SubjectsDemoComponent},
  { path: 'rxjs/operators-demo', component:OperatorsDemoComponent},
  { path: 'rxjs/different-operators', component:DifferentOperatorsComponent},

  /* NgModules routes */
  { path: 'ngmodules/lazy-loading', component:LazyLoadingComponent},
  { path: 'ngmodules/eager-vs-lazy-loading', component:EagerVsLazyLoadingComponent},

  /* FormsModule routes */
  { path: 'forms/reactive/form-control', component: FormControlComponent},
  { path: 'forms/reactive/form-group', component: FormGroupComponent},
  { path: 'forms/reactive/nested-form-group', component: NestedFormGroupComponent},
  { path: 'forms/reactive/form-builder', component: FormBuilderComponent},
  { path: 'forms/reactive/form-array', component: FormArrayComponent},

  { path:'',redirectTo: 'index' ,pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
