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
    this.oauthService.tentarLogar(this.nome, this.senha)
      .subscribe(resposta => {
        const access_token = JSON.stringify(resposta);
        localStorage.setItem('access_token',access_token);
        localStorage.setItem('nome',this.nome);
        this.router.navigate(['/inicio']);
      }, errorResposta => {
        this.errors = ['Usuario ou senha incorretos'];
      })


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
        this.cadastrando = false;
        this.nome = '';
        this.senha = '';
        this.errors = [];
      }, errorResponse => {
        this.mensagemSucesso = null;
        this.errors = errorResponse.error.errors;
      })
  }

}
