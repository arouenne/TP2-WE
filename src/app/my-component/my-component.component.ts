import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  id: string = '';
  search: string = '';

  pokemons: Array<Pokemon> = [
    new Pokemon(1, "Givrali"), 
    new Pokemon(2, "Scorvol"), 
    new Pokemon(3, "Braségali"),
    new Pokemon(4, "Darkrai"),
    new Pokemon(5, "Cizayox")
  ];
}
