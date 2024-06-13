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
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { MegaMenuModule } from 'primeng/megamenu';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
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
    ConfirmDialogModule,
    ScrollPanelModule,
    CardModule,
    PanelModule,
    MegaMenuModule,
    AvatarModule,
    MessagesModule,
    ToastModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    FormsModule,
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
    ConfirmDialogModule,
    ScrollPanelModule,
    CardModule,
    PanelModule,
    MegaMenuModule,
    AvatarModule,
    MessagesModule,
    ToastModule
  ]
})
export class SharedModule { }