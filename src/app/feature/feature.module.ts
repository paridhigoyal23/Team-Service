import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeModule } from './employee/employee.module';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    
    
  ]
})
export class FeatureModule { }
