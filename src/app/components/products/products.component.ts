import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(
    private readonly router: Router
  ) {

  }
  goTo(value: any) {
    switch (value) {
      case 0:
        this.router.navigate(['/productlist']);
        break;
      case 1:
        this.router.navigate(['/newproduct']);
        break;
      default:
        break;
    }
  }
}
