import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';


const routes: Routes = [
  { path: '', component: BasicDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
