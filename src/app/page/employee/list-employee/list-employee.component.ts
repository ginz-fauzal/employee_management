import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../service-employee/employee.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [SharedModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit{

  employees: Employee[] = [];
  
  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService
  ) {
   
  }

  ngOnInit() {
    this.employees = this.employeeService.getData();
  }

  deleteEmployee(employee: Employee) {
    console.log("tes")
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + employee.firstName + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.employees = this.employees.filter((val) => val.username !== employee.username);
            this.messageService.add({ severity: 'error', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        }
    });
  }

  editProduct(){
    this.messageService.add({ severity: 'warn', summary: 'Successful', detail: 'Product Updated', life: 3000 });
  }
}
