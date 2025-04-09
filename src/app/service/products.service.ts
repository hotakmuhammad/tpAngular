import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../interface/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(this.baseUrl);
  }





}
