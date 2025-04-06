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

  totalPokemns: number = 0;

  limit: number = 10;
  offset: number = 0;


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

  nextPage(): void {
    this.offset += this.limit;
    this.loadPokemonItems();

  }
  previousPage(): void {
    this.offset -= this.limit;
    if(this.offset <0) {
      this.loadPokemonItems();
    }
  }

  get paginationInfo(): { currentPage: number, lastPage: number }{

    const currentPage = Math.ceil(this.offset / this.limit) + 1;
    const lastPage = Math.ceil(this.totalPokemns / this.limit);
    return {currentPage, lastPage};
  }
}
