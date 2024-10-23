import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDetail, PokeServiceRes } from '../../models/pokemon';

const url = "https://pokeapi.co/api/v2/pokemon/";

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(private httpClient: HttpClient) { 
  }

  getPokemons(): Observable<PokeServiceRes> {
    return this.httpClient.get<PokeServiceRes>(url);
  }

  getPokemonDetail(name : string): Observable<PokeDetail> {
    return this.httpClient.get<PokeDetail>(url + name + '/');
  }
}
