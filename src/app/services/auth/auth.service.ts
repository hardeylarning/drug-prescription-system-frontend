import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private userService: UserService) { 
    const token = localStorage.getItem('token')
    this._isLoggedIn$.next(!!token)
  }

  login(username: string, password: string) {
    return this.userService.login(username, password).pipe(
      tap((res:any) => {
        this._isLoggedIn$.next(true)
        localStorage.setItem('user', res.user)
        localStorage.setItem('token', res.jwtToken)
      })
    )
  }
}
