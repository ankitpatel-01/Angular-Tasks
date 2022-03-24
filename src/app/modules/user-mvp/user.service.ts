import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department } from './models/dept.model';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getById(id: number) {
    return this.http.get<User>(`${this.apiLink}/users2/${id}`);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/departments`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiLink}/users2`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}/users2`);
  }

  updateUser(id:number, data: User): Observable<User> {
    return this.http.put<User>(`${this.apiLink}/users2/${id}`, data);
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/users2/${id}`);
  }
}
