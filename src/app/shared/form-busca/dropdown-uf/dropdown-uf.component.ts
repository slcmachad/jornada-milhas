import { UnidadeFederativa } from './../../../core/types/type';
import { UnidadeFederativaService } from './../../../core/services/unidade-federativa.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit{

  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;


  unidadesFederativas: UnidadeFederativa[] =  []

  filteredOptions = []

  constructor (private unidadeFederativaService: UnidadeFederativaService){

  }
  ngOnInit(): void {
    this.unidadeFederativaService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados

      })
  }

}
