import { CamposModule } from './../shared/components/campos/campos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations:[
    ListarPessoaComponent,
    CadastrarPessoaComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CamposModule,
    HttpClientModule,
    NgbModule,
    NgxMaskModule.forRoot(maskConfig)
  ]
})
export class PessoaModule{}
