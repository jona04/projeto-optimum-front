# ProjetoOptimum

Para visualizar o projeto em produção acesse [Projeto Optimum Heroku](https://optimum-frontend.herokuapp.com/).

## Versão

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 8.3.25.

## Rodando servidor

Digite no Terminal ou CMD `node server.js` para rodar o servidor em modo desenvolvimento. Em seguida navege para `http://localhost:8000/`.

## Build

Rode `ng build` para construir o projeto. A construção dos artefatos serão armezadas no diretório `dist/`.

## API

Ao iniciar o Web service verifique no arquivo `pessoa.service.js` o endereço para onde está apontado o api. Altere para o endereço local `http://localhost:8080` caso não esteja configurado para o mesmo.

Para que esse Web service funcione corretamente é necessário instalar sua versão backend que encontra-se no link abaixo:

```
https://github.com/jona04/projeto-optimum
```

## Autenticação JWT com login

Para entrar no sistema é necessário realizar cadastro na tela inicial.
Ao efetuar o login será feita uma requisição no servidor de autenticação, onde depois de validado os dados do usuário, 
será retornado um token de acesso. Com esse token armazenado no frontend, o usuário poderá navegar entre as páginas
da aplicação e realizar requisições na api.

## Bugs e Issues abertas

Visualiar Issues abertas no gibhub para verificar bugs a resolver.
