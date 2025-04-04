import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../../interface/IProducts';
import { HttpClient } from '@angular/common/http';
import { IProductParDawan } from '../../interface/IProductParDawan';

@Injectable({
  providedIn: 'root'
})
export class ProductParDawanService {


  private baseUrl: string = 'http://localhost:3001/dw_store';
  constructor(private httpClient: HttpClient) { }

  public getProductsParDawan(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(this.baseUrl);
  }


  //update product 

  public getProductsParDawanById(id: number): Observable<IProductParDawan> {
    return this.httpClient.get<IProductParDawan>(`${this.baseUrl}/${id}`);
  }
  // Add product

  public addProduct(product: IProductParDawan): Observable<IProductParDawan> {
    return this.httpClient.post<IProductParDawan>(this.baseUrl, product);
  }
}
