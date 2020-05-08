import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
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
