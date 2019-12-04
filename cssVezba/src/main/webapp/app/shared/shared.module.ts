import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CssVezbaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CssVezbaSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CssVezbaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CssVezbaSharedModule {
  static forRoot() {
    return {
      ngModule: CssVezbaSharedModule
    };
  }
}
