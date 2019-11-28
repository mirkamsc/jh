import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Library1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Library1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Library1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Library1SharedModule {
  static forRoot() {
    return {
      ngModule: Library1SharedModule
    };
  }
}
