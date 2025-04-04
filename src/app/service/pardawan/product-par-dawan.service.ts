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
  // pre remplir le formulaire
  public getProductsParDawanById(id: number): Observable<IProductParDawan> {
    return this.httpClient.get<IProductParDawan>(`${this.baseUrl}/${id}`);
  }
  //update Product
  updateProductParDawan(product: IProductParDawan): Observable<IProductParDawan>{
    return this.httpClient.put<IProductParDawan>(`${this.baseUrl}/${product.id}`, product);
  }


  // Add product

  public addProduct(product: IProductParDawan): Observable<IProductParDawan> {
    return this.httpClient.post<IProductParDawan>(this.baseUrl, product);
  }
}
