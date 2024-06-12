import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { StepperModule } from 'primeng/stepper';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { RippleModule } from 'primeng/ripple';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';

// import {SidebarComponent} from '../widget/sidebar/sidebar.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DropdownModule,
    StepperModule,
    AvatarModule,
    RippleModule,
    PanelMenuModule,
    StyleClassModule,
    AvatarGroupModule,
    // SidebarComponent
  ],
  exports: [
    ButtonModule,
    RouterModule,
    InputTextModule,
    TableModule,
    DropdownModule,
    StepperModule,
    AvatarModule,
    RippleModule,
    PanelMenuModule,
    StyleClassModule,
    AvatarGroupModule,
    // SidebarComponent
  ]
})
export class SharedModule { }