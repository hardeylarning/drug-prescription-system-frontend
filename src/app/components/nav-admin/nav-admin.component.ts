import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent implements OnInit {

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
