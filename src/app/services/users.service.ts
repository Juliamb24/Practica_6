import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient)
  baseUrl = `https://peticiones.online/api/users`
  
  

  getAll(page: number): Observable<IUser[]> {
    const url = `${this.baseUrl}?page=${page}`
    return this.httpClient.get<IUser[]>(url)
  }

  getAllPromises(page: number): Promise<IUser[]>{
    const url = `${this.baseUrl}?page=${page}`
    return lastValueFrom(this.httpClient.get<IUser[]>(url))
  }

  getById(id:string): Promise<IUser> {
    return lastValueFrom(this.httpClient.get<IUser>(`${this.baseUrl}/${id}`))
  }

}
