import { Component } from '@angular/core';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  titulo = 'Olá pessoa'
  textoBotao = 'ATUALIZAR'
  perfilComponent = true

  token = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  deslogar(){
    console.log('log-out realizado');
  }

  atualizar(){
    console.log('cadastro atualizado');
  }
}
