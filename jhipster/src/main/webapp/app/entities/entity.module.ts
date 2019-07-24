import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#TesthipsterRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#TesthipsterCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#TesthipsterLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#TesthipsterDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#TesthipsterTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#TesthipsterEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#TesthipsterJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#TesthipsterJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesthipsterEntityModule {}
