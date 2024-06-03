import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service.service';
import { Product } from '../../../models/product';
import { FormsModule } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  nombre!: string;
  category!: any;
  count!: string;
  description!: string;
  discount!: string;
  opciones: Category[] = [
    { productcategoryId: '3fa85f64-5717-4562-b3fc-2c963f66afa6', productcategoryName: 'Categoria Generica', productcategoryDescription: 'Opción 1', updatedDate: new Date }
  ];

  categoriaSeleccionada: Category = this.opciones[0];
  constructor(private productService: ProductService) {

  }

  onSubmit() {
    // if (this.clave !== this.repetirClave) {
    //   alert('Las claves no coinciden');
    //   return;
    // }

    const product: Product = {
      productName: this.nombre,
      productCategoryId: this.categoriaSeleccionada.productcategoryId!,
      itenCount: this.count,
      description: this.description,
      discount: this.discount
    };

    this.productService.createProduct(product).subscribe(response => {
      console.log(response);
      if (response) {
        alert("Producto Registrado")
      }
    }, error => {
      console.error(error);
    });
  }
}
