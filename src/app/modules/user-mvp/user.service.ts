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

  /**
   * fetch user details by Id
   * @param id : string
   * @returns User details
   */

  getById(id: string) {
    return this.http.get<User>(`${this.apiLink}/users/${id}`);
  }

  /**
   * get all the department list from database
   * @returns departments array
   */
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/departments`);
  }

  /**
   * Post a new user to server
   * @param user 
   * @returns 
   */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiLink}/users`, user);
  }

  /**
   * fetch user list
   * @returns Users[]
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}/users`);
  }

  /**
   * put new user details to server
   * @param id : string
   * @param data : User
   * @returns 
   */
  updateUser(id: string, data: User): Observable<User> {
    return this.http.put<User>(`${this.apiLink}/users/${id}`, data);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  deleteUser(id: string): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/users/${id}`);
  }
}
