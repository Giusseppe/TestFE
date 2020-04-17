import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

private urlEndpoint = 'https://randomuser.me/api/?results=10';

users: any = {
  "results": [
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Esra",
              "last": "Essers"
          },
          "location": {
              "street": {
                  "number": 8876,
                  "name": "Bramengaarde"
              },
              "city": "Mantinge",
              "state": "Overijssel",
              "country": "Netherlands",
              "postcode": 60880,
              "coordinates": {
                  "latitude": "42.7827",
                  "longitude": "-78.8535"
              },
              "timezone": {
                  "offset": "-11:00",
                  "description": "Midway Island, Samoa"
              }
          },
          "email": "esra.essers@example.com",
          "login": {
              "uuid": "430e38a9-1b16-4eca-a994-4e201d095f25",
              "username": "organicfish379",
              "password": "malaka",
              "salt": "gShy3YQO",
              "md5": "ca4bbd79db8b7ec919fffd86112b4e93",
              "sha1": "4609ff0cf9654517795b73f900535f6402d9714b",
              "sha256": "5eda67ed985b24839337aef7a87b6c95e5fa2348bab1e6c9d54c687adea7db77"
          },
          "dob": {
              "date": "1994-01-26T02:34:20.937Z",
              "age": 26
          },
          "registered": {
              "date": "2005-01-27T03:29:43.615Z",
              "age": 15
          },
          "phone": "(080)-539-1370",
          "cell": "(015)-649-2167",
          "id": {
              "name": "BSN",
              "value": "79819524"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/3.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/3.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/3.jpg"
          },
          "nat": "NL"
      }
  ],
  "info": {
      "seed": "1d0fcf141c6cd64e",
      "results": 1,
      "page": 1,
      "version": "1.3"
  }
};

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.urlEndpoint);
  }
}
