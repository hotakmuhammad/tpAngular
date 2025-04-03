import { Component, OnInit } from '@angular/core';
import { PokeMonService } from '../../../service/pokemon/poke-mon.service';

import { IResponsePokeMon } from '../../../interface/IResponsePokeMon';
import { IPokemonDetails } from '../../../interface/IPokemonDetails';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  pokemon?: IResponsePokeMon;

  pokemonList: IPokemonDetails[] = [];

  constructor (

    private pokemonService: PokeMonService,){

  }

  ngOnInit(): void {
      this.loadPokemonItems();
  }

  loadList(pokemon: IResponsePokeMon): void {
    pokemon.results.forEach(element => {
      this.pokemonService.getPokemonDetails(element.url)
      .subscribe({
        next: ((response: IPokemonDetails) => {
          this.pokemonList.push(
            response
          )
        })
      })
    });
  }
  
  loadPokemonItems() {

    this.pokemonService.getPokemonItems()
    .subscribe({
      next: (response: any) => 
      {console.log(response)
        this.pokemon = response
        this.loadList(response)
      },
      
      error: (error: any) => console.log(error),
      complete: () => console.log('Items oaded successfully')
    })
  }



}
