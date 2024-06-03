import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  nombre!: string;
  category!: string;
  count!: string;
  description!: string;
  discount!: string;
  constructor(private productService: ProductService) {

  }

  onSubmit() {
    // if (this.clave !== this.repetirClave) {
    //   alert('Las claves no coinciden');
    //   return;
    // }

    const product: Product = {
      productName: this.nombre,
      productCategoryId: this.category,
      itenCount: this.count,
      updatedDate: new Date().toString(),
      description: this.description,
      discount: this.discount
    };
    alert(product)
    this.productService.createProduct(product).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }
}
