import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';
// import { ResumeBuilderModule } from '../resume-builder.module';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  apiLink:string
  // private subject = new Subject<User>();

  constructor(private http: HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  // sendUserData(data:User){
  //   this.subject.next(data);
  // }

  // getUserData(): Observable<User> {
  //   return this.subject.asObservable();  
  // }

  saveUser(data:User):Observable<User>{
    return this.http.post<User>(`${this.apiLink}/resume`, data);
  }

  getUserData():Observable<User>{
    return this.http.get<User>(`${this.apiLink}/resume/1`);
  }

  deleteUser(id:number):Observable<number>{
    return this.http.delete<number>(`${this.apiLink}/resume/${id}`);
  }
}
