import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient)
  baseUrl = 'https://peticiones.online/api/users' 
  

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.baseUrl)
  }

  getAllPromises(): Promise<IUser[]>{
    return lastValueFrom(this.httpClient.get<IUser[]>(this.baseUrl))
  }
}
