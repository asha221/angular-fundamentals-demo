import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { ForbiddenNameValidaorDirective } from './validators/forbidden-name-validaor.directive';
// import { UniqueUserNameAsyncValidatorDirective } from './validators/unique-user-name-async-validator.directive';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  // declarations: [ForbiddenNameValidaorDirective, UniqueUserNameAsyncValidatorDirective, PageNotFoundComponent],
  // exports: [ForbiddenNameValidaorDirective, UniqueUserNameAsyncValidatorDirective]
})
export class SharedModule { }
