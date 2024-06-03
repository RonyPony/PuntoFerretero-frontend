import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  /**
   *
   */
  constructor(private router: Router) {

  }
  goTo(str: string) {
    this.router.navigate([str]);
  }
}
