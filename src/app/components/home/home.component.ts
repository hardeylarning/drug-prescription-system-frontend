import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  loggedIn: Boolean = false
  subAdmin = new Subject<boolean>()
  isAdmin = false

  constructor(private userService: UserService) { 
    this.subAdmin.next(userService.hasAccess())
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.subAdmin.subscribe(r => {
      console.log('Admin: ', r)
      this.isAdmin = r
    }
    )
  }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn()
    this.subAdmin.subscribe(r => {
      console.log('Admin: ', r)
      this.isAdmin = r 
      this.ngOnInit()
    }
    )
    // window.location.reload();
  }

}
