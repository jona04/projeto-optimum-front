import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { LayoutComponent } from './../layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {path : 'pessoas', component: LayoutComponent, children:[
    { path: 'cadastrar', component: CadastrarPessoaComponent },
    { path: 'listar', component: ListarPessoaComponent },
    { path: '', redirectTo:"/pessoas/listar", pathMatch:'full' },
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule{}
