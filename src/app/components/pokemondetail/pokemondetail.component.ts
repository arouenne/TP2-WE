import { Component, Input } from '@angular/core';
import { PokeDetail } from '../../models/pokemon'
import { PokeShareInfoService } from '../../services/pokeshareinfo/poke-share-info.service';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrl: './pokemondetail.component.css'
})
export class PokemondetailComponent {

  @Input('pokeDetail')
  pokeDetail: PokeDetail | undefined;

  constructor(private pokeShareInfoService: PokeShareInfoService) {
    this.pokeShareInfoService.getObservable().subscribe(e => console.log(e))
  }

  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      normal: '#ABAB99',
      fire: '#F64624',
      water: '#5297FF',
      grass: '#61C53F',
      electric: '#F0BD2F',
      ice: '#7AD0F4',
      fighting: '#CE6032',
      poison: '#8440A0',
      ground: '#B07435',
      flying: '#90A0EE',
      psychic: '#F05192',
      bug: '#A4BB38',
      rock: '#C19D5B',
      ghost: '#634873',
      dark: '#483636',
      dragon: '#5731DB',
      steel: '#B1B1CD',
      fairy: '#EE99D6'
    };
    return typeColors[type] || '#ABAB99';
  }
}
