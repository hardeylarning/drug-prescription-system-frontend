import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { User } from 'src/app/model/user';
import { User2 } from 'src/app/model/user2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = 'http://localhost:8080/users'

  private message!: string 

  isAdmin = of(this.hasAccess())

  num = [1, 2, 3, 4, 5]


  constructor(private http: HttpClient) { }

  setMessage(message: string) {
    this.message = message
  }

  getMessage() {
    return this.message
  }

  getUser(id: number) {
    return this.http.get<User>(this.BASE_URL+'/'+id)
  }

  getUsers() {
    return this.http.get<User[]>(this.BASE_URL)
  }

  addUser(user: User2) {
    return this.http.post<User>(this.BASE_URL +'/add', user)
  }

  updateUser(id:number, user: User) {
    return this.http.put<User>(this.BASE_URL+'/'+id, user)
  }

  deleteUser(id:number) {
    return this.http.delete<void>(this.BASE_URL+'/'+id)
  }

  login(userName: string, password: string) {
    const requestHeader = {
      headers: new HttpHeaders(
       { "No-Auth": "True"}
      )
    }
    return this.http.post('http://localhost:8080/login', { userName, password }, requestHeader)
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null
  }

  getToken() {
    return localStorage.getItem('token') || ''
  }

  hasAccess() {
    let token = this.getToken()
    if (token.length > 0) {
      token = token.split('.')[1]
      console.log('Token :=> ',token);
    
    let tokenDecoded = atob(token)
    // let undepreceated = Buffer.from(token, 'base64')
    let result = JSON.parse(tokenDecoded)
    // console.log('Token Decoded:=> ', result);
    // console.log('Buffer Decoded:=> ', undepreceated);

    let scopes: string[] = result.scopes
    if (scopes.includes('ROLE_ADMIN')) {
      
      return true
      // console.log("ADMIN");
      // console.log('Index:=> ',scopes.indexOf('ROLE_ADMIN'));
      
    }
    }
    

    this.setMessage('Unauthorized')
    // alert('You cannot access this page')
    return false

  }

}
