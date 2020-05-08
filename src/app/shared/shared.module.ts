import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports:[
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ]
})
export class ShareModule{}
