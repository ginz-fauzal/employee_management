import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  providers: [MessageService]
})
export class AddEmployeeComponent {

  employeeForm: any;
  groups: any[] | undefined;

  constructor(
    private fb: FormBuilder, 
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required, this.dateValidator]],
      basicSalary: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      status: ['', Validators.required],
      grup: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.groups = [
      { name: 'IT' },
      { name: 'HR' },
      { name: 'Finance' },
      { name: 'Marketing' },
      { name: 'Sales' },
      { name: 'Staff' },
      { name: 'Security' },
      { name: 'Administrasi' },
      { name: 'Manager' },
      { name: 'Ceo' }
  ];
  }

  
	get ef() { return this.employeeForm.controls }

  dateValidator(control:any) {
    const inputDate = new Date(control.value);
    const today = new Date();
    if (inputDate > today) {
      return { futureDate: true };
    }
    return null;
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Form submitted'});
    } else {
      console.log('Form is not valid');
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Form is not valid'});
    }
  }
}
