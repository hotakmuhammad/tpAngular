import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokeMon } from '../../interface/IPokeMon';
import { IResponsePokeMon } from '../../interface/IResponsePokeMon';
import { IPokemonDetails } from '../../interface/IPokemonDetails';

@Injectable({
  providedIn: 'root'
})
export class PokeMonService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon'
  constructor(private httpClient: HttpClient) { }

  public getPokemonItems(): Observable<IResponsePokeMon> {
    return this.httpClient.get<IResponsePokeMon>(`${this.baseUrl}?limit=20&offset=1`);
  }

  public getPokemonDetails(url: string): Observable<IPokemonDetails> {
    return this.httpClient.get<IPokemonDetails>(url);
  }


}
