import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';

export interface User {
  DemandID: string;
  DealID: string;
  JD: string;
  Role: string;
  Location:string;
  Expr:string;
  ResourceCount:string;
  BSD:string;
  Bucket:string;
  ScaleID:string;
  Status:string;
}

export interface signup {
  id:string;
  pswd:string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url='http://localhost:3000/tracker/';
  URLlogins='http://localhost:3000/login_signup/';

  
  getUser(): Observable<User[]> 
  {
    return this.http.get<User[]>(this.url);
  }

  getUsers(userId): Observable<User[]> 
  {
    return this.http.get<User[]>(this.url+userId)
  }

  postData(UserData)
  {
    return this.http.post(this.url,UserData)
  }

  putData(UserData,id)
  {
    return this.http.put(this.url+id,UserData)
  }

  delData(userId)
  {
    return this.http.delete(this.url+userId)
  }

  signup(UserData)
  {
    return this.http.post(this.URLlogins,UserData)
  }

  loginUsers()
  {
    return this.http.get(this.URLlogins);
  }


}
