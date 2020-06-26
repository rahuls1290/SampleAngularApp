import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // , pathMatch: 'full'  
  {
    path: 'home',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule),
    // canActivate: [AuthGaurdService]
  },

  {
    path: 'employee',
    loadChildren: () => import('./modules/employee/employee.module').then(mod => mod.EmployeeModule),
    // canActivate: [AuthGaurdService]
  },
  
  { path: 'not-found', component: NotFoundComponent },  
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
