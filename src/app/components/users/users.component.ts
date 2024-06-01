import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  /**
   *
   */
  constructor(
    private readonly router: Router
  ) {

  }
  goTo(value: any) {
    switch (value) {
      case 0:
        this.router.navigate(['/userslist']);
        break;
      case 1:
        this.router.navigate(['/newuser']);
        break;
      default:
        break;
    }
  }
}
