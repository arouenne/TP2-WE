import { Component } from '@angular/core';
import { PokeDetail, Pokemon } from '../../models/pokemon';
import { PokeAPIService } from '../../services/pokeapi/poke-api.service';
import { PokeShareInfoService } from '../../services/pokeshareinfo/poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [PokeAPIService]
})
export class MyComponentComponent {
  id: string = '';
  search: string = '';
  selectedPokemonId: number | undefined;
  selectedPokemon: Pokemon | undefined;
  pokeDetail: PokeDetail | undefined;
  pokemons: Pokemon[] = [];

  constructor(private pokeAPIService: PokeAPIService, private pokeShareInfoService: PokeShareInfoService) { }

  ngOnInit(): void {
    this.pokeAPIService.getPokemons().subscribe(
      (data) => {
        this.pokemons = [];
        data.results.forEach((pokemon: any, index: number) => {
          this.pokemons.push(new Pokemon(index + 1, pokemon.name));
        });
      },
      (error) => {
        console.error('Error fetching pokemons', error);
      }
    );
  }

  go() {
    this.selectedPokemon = this.pokemons.find((p) => p.id == this.selectedPokemonId);
    if (this.selectedPokemon) {
      this.pokeShareInfoService.setValue(this.selectedPokemon.name);
      this.pokeAPIService.getPokemonDetail(this.selectedPokemon.name).subscribe(
        (data) => {
          this.pokeDetail = data;
        },
        (error) => {
          console.error('Error fetching pokemon detail', error);
        }
      );
    }
  }
}
