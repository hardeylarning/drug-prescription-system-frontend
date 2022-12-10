import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent implements OnInit {

  isAdmin = false

  subAdmin = new Subject<boolean>()

  constructor(private router: Router, public userService: UserService) { 
    this.subAdmin.next(userService.hasAccess())
  }

  ngOnInit(): void {
    this.isAdmin = this.userService.hasAccess()
      // this.subAdmin.subscribe(r => this.isAdmin = r)

      console.log('IsAdmin: ', this.isAdmin);
      
  }

  logout() {
    localStorage.removeItem('token')
    this.isAdmin = false
    window.location.replace('/home')
    // this.router.navigate(['login'])
  }

}
