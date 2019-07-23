import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TesthipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TesthipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TesthipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesthipsterSharedModule {
  static forRoot() {
    return {
      ngModule: TesthipsterSharedModule
    };
  }
}
