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

  delete(id:string): Promise<IUser>{
    return lastValueFrom(this.httpClient.delete<IUser>(`${this.baseUrl}/${id}`))
  }

  createUser(formValue: IUser) : Promise<IUser>{
    return lastValueFrom(this.httpClient.post<IUser>(this.baseUrl, formValue))
  }

  update(formValue: IUser): Promise<IUser>{
    return lastValueFrom(this.httpClient.put<IUser>(`${this.baseUrl}/${formValue._id}`, formValue))

  }

}
