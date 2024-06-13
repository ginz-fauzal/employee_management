import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Material
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
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
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
    IconFieldModule,
    InputIconModule,
    DialogModule,
    ConfirmDialogModule
  ],
  exports: [
    CommonModule,
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
    IconFieldModule,
    InputIconModule,
    DialogModule,
    ConfirmDialogModule
  ]
})
export class SharedModule { }