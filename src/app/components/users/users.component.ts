import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  goTo(value: number) {
    switch (value) {
      case 0:
        break;
      case 1:
        break;
      default:
        break;
    }
  }
}
