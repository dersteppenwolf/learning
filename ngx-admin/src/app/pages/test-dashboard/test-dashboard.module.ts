import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { TestDashboardComponent } from './test-dashboard.component';



@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    TestDashboardComponent
  ],
  providers: [
    
  ],
})
/**
 * See https://angular.io/guide/architecture-modules
 */
export class TestDashboardModule { }
