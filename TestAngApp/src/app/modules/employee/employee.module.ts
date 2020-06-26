import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';


@NgModule({
  declarations: [BasicDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  //providers: [StaffService],
})
export class EmployeeModule { }
