import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  //get employee detail by id
  getById(id: number) {
    return this.http.get<Employee>(`${this.apiLink}/employees/${id}`);
  }

  //get all employee detail from db
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiLink}/employees`);
  }

  //save employee detail to db
  createEmployee(data: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiLink}/employees`, data);
  }

  //update employee detail to db at specific id
  updateEmployee(id: number, data: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiLink}/employees/${id}`, data);
  }

  //detele employee detail at db with id
  deleteEmployee(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/employees/${id}`);
  }
}
