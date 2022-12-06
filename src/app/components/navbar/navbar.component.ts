import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAdmin = false

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
    this.isAdmin = this.userService.hasAccess()
      
  }

  logout() {
    localStorage.removeItem('token')
    this.isAdmin = false
    this.router.navigate(['login'])
  }



}
