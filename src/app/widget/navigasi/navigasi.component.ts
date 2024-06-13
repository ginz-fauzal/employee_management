import { Component, OnInit  } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { Router } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-navigasi',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navigasi.component.html',
  styleUrl: './navigasi.component.css'
})
export class NavigasiComponent implements OnInit{

  items: MegaMenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
      this.items = [
          {
              label: 'Data Employee',
              root: true,
              command: () => this.router.navigate(['/employee/list'])
          },
          {
              label: 'Tambah Data',
              root: true,
              command: () => this.router.navigate(['/employee/add'])
          }
      ];
  }
}
