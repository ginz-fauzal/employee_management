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
  activePath: string = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
      this.items = [
          {
              label: 'Data Employee',
              alamat:'/employee/list',
              command: () => this.navigate('/employee/list')
          },
          {
              label: 'Tambah Data',
              alamat:'/employee/add',
              command: () => this.navigate('/employee/add')
          }
      ];
  }

  navigate(path: string) {
    this.activePath = path;
    console.log(this.activePath)
    this.router.navigate([path]);
  }

  isActive(index: string): boolean {
    if(this.activePath===''){
      this.activePath=this.router.routerState.snapshot.url
    }
    return this.activePath === index;
  }
}
