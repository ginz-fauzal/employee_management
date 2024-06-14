import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../service-employee/employee.service';

@Component({
  selector: 'app-detail-employee',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.css'
})
export class DetailEmployeeComponent {

  employee: Employee | undefined;
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute) { 
  }
  

  ngOnInit(): void {
    this.employees = this.employeeService.getData();
    this.route.paramMap.subscribe(params => {
      const username = params.get('username');
      console.log(username)
      this.employee = this.employees.find(user => user.username === username);
    });
  }
}
