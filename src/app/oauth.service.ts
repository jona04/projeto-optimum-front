import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  apiUrl:string = environment.apiBaseUrl+'/api/usuarios';

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario) : Observable<any>{
    return this.http.post<any>(this.apiUrl, usuario);
  }
}
