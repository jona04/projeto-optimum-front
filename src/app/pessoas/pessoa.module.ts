import { CamposModule } from './../shared/components/campos/campos.module';
import { ShareModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    ListarPessoaComponent,
    CadastrarPessoaComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CamposModule
  ]
})
export class PessoaModule{}
