import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{
  titulo = 'Olá '
  textoBotao = 'ATUALIZAR'
  perfilComponent = true

  token = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  form!: FormGroup<any> | null

  constructor(
    private cadastroService: CadastroService,
    private tokenService: TokenService,
    private formularioService: FormularioService
  ){}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe( cadastro => {
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome;
      this.carregarFormulario();
    })
  }

  carregarFormulario(){
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado,
      genero: this.cadastro.genero,
    })
  }

  deslogar(){
    console.log('log-out realizado');
  }

  atualizar(){
    console.log('cadastro atualizado');
  }
}
