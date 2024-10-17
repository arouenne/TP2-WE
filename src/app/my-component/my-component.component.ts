import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeAPIService } from '../poke-api.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  id: string = '';
  search: string = '';
  selectedPokemon: number | undefined;

  


  go() {
    // @ts-ignore
    this.selectedPokemon = document.getElementById("selectedPokemon").value;
    // const pokemon = this.pokemons.find((p) => p.id == this.selectedPokemon);
    // console.log(pokemon);
  }
}
