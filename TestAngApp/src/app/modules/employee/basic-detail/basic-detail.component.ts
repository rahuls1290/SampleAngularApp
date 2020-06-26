import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/employee-management/staff.service';

@Component({
  selector: 'app-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.scss']
})
export class BasicDetailComponent implements OnInit {

  staffId: number;
  staffList: Staff[];
  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
  }

  getAllStaff() {
    this.staffService.getEmployees().subscribe(data => {
      this.staffList = data;
    });
  }

  getStaffById() {
    this.staffService.getEmployeeById(this.staffId).subscribe(data => {
      if (data != null && data.Id > 0) {
        this.staffList = new Array<Staff>();
        this.staffList.push(data);
      } else {
        this.staffList = null;
      }

    });
  }

}
