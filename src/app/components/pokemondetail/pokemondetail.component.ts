import { Component, Input } from '@angular/core';
import { PokeDetail} from '../../models/pokemon'
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
}
