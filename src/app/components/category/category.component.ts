import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
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
        this.router.navigate(['/categorylist']);
        break;
      case 1:
        this.router.navigate(['/newcategory']);
        break;
      default:
        break;
    }
  }
}
