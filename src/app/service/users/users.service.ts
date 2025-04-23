import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../../interface/IUsers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) { }
  

  public addUser(user: any): Observable<IUsers> {
    return this.httpClient.post<IUsers>(this.baseUrl, user);
  }
}
