import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  apiUrl:string = environment.apiBaseUrl+'/api/usuarios';
  tokenUrl:string = environment.apiBaseUrl+environment.tokenUrl;
  clientId: string = environment.clientId;
  clientSecret:string = environment.clientSecret;

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) { }

  obterToken(){
    const tokenString = localStorage.getItem("access_token");
    if (tokenString){
      const token = JSON.parse(tokenString).access_token;
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean{
    const token = this.obterToken();
    if (token){
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired
    }
    return false;
  }

  salvar(usuario: Usuario) : Observable<any>{
    return this.http.post<any>(this.apiUrl, usuario);
  }

  tentarLogar(nome:string, senha:string): Observable<any>{
    const params = new HttpParams()
      .set('username',nome)
      .set('password', senha)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type' : 'application/x-www-form-urlencoded'
    };

    return this.http.post(this.tokenUrl, params.toString(), { headers });
  }

  encerrarSessao(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('nome');
  }
}
