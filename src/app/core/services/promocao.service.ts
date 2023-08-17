import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/type';


@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  listar (): Observable<Promocao[]>{
    return this.httpClient.get<Promocao[]>('')
  }
}
