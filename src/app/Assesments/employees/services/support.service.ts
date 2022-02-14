import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department, Gender } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  //get all gender from db
  getGender(): Observable<Gender[]> {
    return this.http.get<Department[]>(`${this.apiLink}/gender`);
  }

  //get all departments list from db
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/departments`);
  }
}
