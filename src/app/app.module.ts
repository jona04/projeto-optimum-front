import { OauthService } from './oauth.service';
import { PessoasRoutingModule } from './pessoas/pessoas-routing.module';
import { PessoaModule } from './pessoas/pessoa.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';
import { ShareModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    InicioComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    ShareModule,
    PessoaModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule

  ],
  providers: [OauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
