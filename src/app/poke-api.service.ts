import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(private httpClient: HttpClient) { 
  }

  getPokemons() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon');
  }
}
