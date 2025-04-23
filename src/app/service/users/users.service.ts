import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }
}
