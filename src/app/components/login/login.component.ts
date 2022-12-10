import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  responseData = null

  username:string = ''
  password:string = ''

  constructor(private authService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  

  login() {
    this.authService.login(this.username, this.password).subscribe((res: any) => {
      if (res != null) {
        this.responseData = res
        localStorage.setItem('token', res.jwtToken) 
        let token = res.jwtToken.split('.')[1]
    let tokenDecoded = atob(token)
    // let undepreceated = Buffer.from(token, 'base64')
    let result = JSON.parse(tokenDecoded)

    console.log('Token Decoded:=> ', result.scopes);
    // console.log('Buffer Decoded:=> ', undepreceated);
    this.ngOnInit();
    window.location.replace('/home')
        this.router.navigate(['/home'])
      }
    })
  }

  

}
