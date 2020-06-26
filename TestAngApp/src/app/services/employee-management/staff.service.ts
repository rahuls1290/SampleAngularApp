import { Injectable } from '@angular/core';
import { EmployeeModule } from 'src/app/modules/employee/employee.module';
import { HttpWrapperService } from 'src/app/shared/services';
import { Staff } from 'src/app/models/staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpWrapperService) { }

  getEmployees() : Observable<Staff[]> {
    return this.http.get<Staff[]>('Employee/GetStaffList');
  }

  getEmployeeById(id) : Observable<Staff> {
    return this.http.get<Staff>(`Employee/GetStaffById/${id}`);
  }
}
