import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports:[
    RouterModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ]
})
export class CoreModule{}
