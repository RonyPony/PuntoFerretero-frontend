import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  /**
   *
   */
  constructor(private productService: ProductService, private router: Router) {

  }
  ngOnInit(): void {
    this.getData()
  }
  searchTerm: string = '';
  data: any[] = [
  ];

  getData() {
    this.productService.getAllProducts().subscribe((x) => {
      console.log(x)
      this.data = x
    })
  }

  verifyDiscount(data: string) {
    if (data === "00000000-0000-0000-0000-000000000000") {
      return "Sin Descuentos";
    } else {
      return "Aplican Descuentos"
    }
  }

  formatDate(date: string) {
    let res: Date = new Date(date);
    return res.toLocaleString();
  }

  goToEdit(id: string) {
    this.router.navigate(['/editproduct'], { queryParams: { id: id } });
    console.log(id)
  }

  get filteredData() {
    if (this.searchTerm) {
      return this.data.filter(item =>
        item.productName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      return this.data;
    }
  }
}
