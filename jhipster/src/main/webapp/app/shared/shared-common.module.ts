import { NgModule } from '@angular/core';

import { TesthipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TesthipsterSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TesthipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TesthipsterSharedCommonModule {}
