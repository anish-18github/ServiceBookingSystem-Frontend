import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from '../ng-zorro.module';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyDashboardComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    NgZorroModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
