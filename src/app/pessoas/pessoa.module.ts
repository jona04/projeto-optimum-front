import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    ListarPessoaComponent,
    CadastrarPessoaComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class PessoaModule{}
