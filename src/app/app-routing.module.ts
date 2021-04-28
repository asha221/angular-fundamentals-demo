import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { DirectivesComponent } from './components-templates/directives/directives.component';
import { DisplayDataInTemplateComponent } from './components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateurlComponent } from './components-templates/display-data-in-templateurl/display-data-in-templateurl.component';
import { TemplateSyntaxComponent } from './components-templates/template-syntax/template-syntax.component';
import { CustomEventsComponent } from './components-templates/custom-events/custom-events.component';
import { TwoWayBindingComponent } from './components-templates/two-way-binding/two-way-binding.component';
import { InteractionComponent } from './components-templates/interaction/interaction.component';
import { LifecycleHooksComponent } from './components-templates/lifecycle-hooks/lifecycle-hooks.component';
import { LifeycleViewHooksComponent } from './components-templates/lifeycle-view-hooks/lifeycle-view-hooks.component';
import { LifeycleContentHooksComponent } from './components-templates/lifeycle-content-hooks/lifeycle-content-hooks.component';
import { PipesComponent } from './components-templates/pipes/pipes/pipes.component';

import { ObservablesDemoComponent } from './rx-demo/observables-demo/observables-demo.component';
import { SubjectDemoComponent } from './rx-demo/subject-demo/subject-demo.component';
import { OperatorsDemoComponent } from './rx-demo/operators-demo/operators-demo.component';
import { DifferentOperatorsComponent } from './rx-demo/different-operators/different-operators.component';

import { LazyLoadingDemoComponent } from './modules-demo/lazy-loading-demo/lazy-loading-demo.component';
import { EagerVsLazyLoadingComponent } from './modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component';
import { CounterHomeComponent as CounterOneHomeComponent } from './counter-one/counter-home/counter-home.component';
import { CounterHomeComponent as CounterTwoHomeComponent } from './counter-two/counter-home/counter-home.component';

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
  { path: 'components-templates/component-interaction',component:InteractionComponent},
  { path: 'components-templates/lifecycle-hooks',component:LifecycleHooksComponent},
  { path: 'components-templates/lifecycle-view-hooks',component:LifeycleViewHooksComponent},
  { path: 'components-templates/lifeycle-content-hooks',component:LifeycleContentHooksComponent},
  { path: 'components-templates/pipes',component:PipesComponent},
  
  /* Rx-js module routes  */
  { path: 'rxjs/observables-demo',component:ObservablesDemoComponent},
  { path: 'rxjs/subjects-demo',component:SubjectDemoComponent},
  { path: 'rxjs/operators-demo',component:OperatorsDemoComponent},
  { path: 'rxjs/different-operators',component:DifferentOperatorsComponent},

  /* NgModules lazy-loading routes */
  { path: "modules-demo/lazy-loading-demo",component:LazyLoadingDemoComponent},

  /* Lazy loading demo routes 
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' }, */

  /* Angular 8 lazy loading syntax */
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)}, 

  /* Eager Vs Lazy loading demo routes */
  { path: 'modules-demo/eager-vs-lazy-loading',component:EagerVsLazyLoadingComponent},
  { path: 'counter-one/counter-home/counter-home.component',component:CounterOneHomeComponent},
  { path: 'counter-two/counter-home/counter-home.component',component:CounterTwoHomeComponent},
  { path: 'lazy-counter-home', loadChildren:() => import('./counter-lazy/counter-lazy.module').then(m=>m.CounterLazyModule)},
  // { path: 'lazy-counter-home', loadChildren: './counter-lazy/counter-lazy.module#CounterLazyModule' },

  { path:'',redirectTo: 'index' ,pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
