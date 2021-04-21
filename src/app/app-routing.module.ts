import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { DirectivesComponent } from './components-templates/directives/directives.component';
import { DisplayDataInTemplateComponent } from './components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateurlComponent } from './components-templates/display-data-in-templateurl/display-data-in-templateurl.component';
import { TemplateSyntaxComponent } from './components-templates/template-syntax/template-syntax.component';
import { CustomEventsComponent } from './components-templates/custom-events/custom-events.component';
import { TwoWayBindingComponent } from './components-templates/two-way-binding/two-way-binding.component';

import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InteractionComponent } from './components-templates/interaction/interaction.component';
import { LifecycleHooksComponent } from './components-templates/lifecycle-hooks/lifecycle-hooks.component';
import { LifeycleViewHooksComponent } from './components-templates/lifeycle-view-hooks/lifeycle-view-hooks.component';
import { LifeycleContentHooksComponent } from './components-templates/lifeycle-content-hooks/lifeycle-content-hooks.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  
  /* Components-Templates  module routes*/

  { path: 'components-templates/display-data-in-template', component:  DisplayDataInTemplateComponent },
  { path: 'components-templates/display-data-in-templateurl', component:  DisplayDataInTemplateurlComponent },
  { path: 'components-templates/template-syntax', component:TemplateSyntaxComponent},
  { path: 'components-templates/custom-events', component:CustomEventsComponent},
  { path: 'components-templates/two-way-binding', component:TwoWayBindingComponent},
  { path: 'components-templates/directives', component:DirectivesComponent},
  { path: 'components-templates/component-interaction',component:InteractionComponent},
  { path: 'components-templates/lifecycle-hooks',component:LifecycleHooksComponent},
  { path: 'components-templates/lifecycle-view-hooks',component:LifeycleViewHooksComponent},
  { path: 'components-templates/lifeycle-content-hooks',component:LifeycleContentHooksComponent},

  { path:'',redirectTo: 'index' ,pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
