import { CamposModule } from './../shared/components/campos/campos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// import { NgxMaskModule, IConfig } from 'ngx-mask'

// const maskConfig: Partial<IConfig> = {
//   validation: false,
// };

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
    HttpClientModule
  ]
})
export class PessoaModule{}
