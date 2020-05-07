import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarPessoaComponent } from './pessoas/cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarPessoaComponent } from './pessoas/listar-pessoa/listar-pessoa.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'cadastrar-pessoa', component: CadastrarPessoaComponent },
  { path: 'listar-pessoas', component: ListarPessoaComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
