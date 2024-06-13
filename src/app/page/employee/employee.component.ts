import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from '../../widget/sidebar/sidebar.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [SharedModule,RouterModule,SidebarComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
