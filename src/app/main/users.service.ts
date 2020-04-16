import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

private urlEndpoint = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.urlEndpoint);
  }
}
