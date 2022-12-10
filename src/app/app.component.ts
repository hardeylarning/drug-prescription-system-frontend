import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges{

  
  isAdmin = this.userService.hasAccess()

  subscriber: Subscription = new Subscription()

  subAdmin = new Subject<boolean>()

  constructor(private userService: UserService){
    this.subAdmin.next(userService.hasAccess())
    this.subAdmin.subscribe(r => {
      console.log('Admin: ', r)
      this.isAdmin = r
    }
    )
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.subAdmin.subscribe(r => {
      console.log('Admin: ', r)
      this.isAdmin = r
    })
  
  }
  title = 'basic-crud-app';
  
}
