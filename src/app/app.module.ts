import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgmodulesModule } from './ngmodules/ngmodules.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsTemplatesModule } from './components-templates/components-templates.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { RxjsModule } from './rxjs/rxjs.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsTemplatesModule,
    NgbModule,
    RxjsModule,
    NgmodulesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
