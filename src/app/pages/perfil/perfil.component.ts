import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  titulo = 'Olá pessoa'
  textoBotao = 'ATUALIZAR'
  perfilComponent = true

  deslogar(){
    console.log('log-out realizado');
  }

  atualizar(){
    console.log('cadastro atualizado');
  }
}
