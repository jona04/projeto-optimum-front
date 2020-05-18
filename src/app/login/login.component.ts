import { OauthService } from './../oauth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  nome: string;
  senha: string;
  cadastrando:boolean;
  mensagemSucesso: string;
  errors: String[];

  constructor(
    private router: Router,
    private oauthService: OauthService
  ) { }

  onSubmit(){
    this.router.navigate(['/inicio']);
  }

  preparaCadastrar(e){
    e.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.nome = this.nome;
    usuario.senha = this.senha;

    this.oauthService
      .salvar(usuario)
      .subscribe( reposta => {
        this.mensagemSucesso = "Cadastro realizado com sucesso. Efetue o login.";

      }, errorResponse => {
        this.mensagemSucesso = null;
        this.errors = errorResponse.error.errors;
      })
  }

}
