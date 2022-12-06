import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAdmin = this.userService.hasAccess()

  constructor(private userService: UserService){}
  title = 'basic-crud-app';
}
