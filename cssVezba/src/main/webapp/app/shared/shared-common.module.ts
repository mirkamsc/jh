import { NgModule } from '@angular/core';

import { CssVezbaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [CssVezbaSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [CssVezbaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CssVezbaSharedCommonModule {}
