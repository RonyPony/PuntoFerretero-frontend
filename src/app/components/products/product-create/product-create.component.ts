import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service.service';
import { Product } from '../../../models/product';
import { FormsModule } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  nombre!: string;
  category!: any;
  count!: string;
  description!: string;
  discount!: string;
  sellingPrice!: number;
  buyingPrice!: number;
  opciones: Category[] = [
    // { productcategoryId: '2858D122-A174-4CB1-F699-08DC8446ADF1', productcategoryName: 'Categoria Generica', productcategoryDescription: 'Opción 1', updatedDate: new Date }
  ];
  ktegory: any;
  errorMessage: string = "";
  constructor(private productService: ProductService, private categoryService: CategoryService) {

  }
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe((x) => {

      this.opciones = x
      console.log(x, this.opciones)
    })
  }
  changeCat() {
    JSON.stringify(this.ktegory)
    console.log('La categoría seleccionada ha cambiado a: ' + this.ktegory);
  }
  onSubmit() {
    // if (this.clave !== this.repetirClave) {
    //   alert('Las claves no coinciden');
    //   return;
    // }
    const product: Product = {
      productName: this.nombre,
      productCategoryId: this.ktegory,
      itenCount: this.count,
      description: this.description,
      discount: this.discount,
      sellingPrice: this.sellingPrice,
      buyingPrice: this.buyingPrice
    };
    if (product.productName != null) {
      if (product.productCategoryId != null) {
        this.productService.createProduct(product).subscribe(response => {
          console.log(response);
          if (response) {
            alert("Producto Registrado")
          }
        }, error => {
          console.error(error);
        });
      } else {
        this.errorMessage = "Selecciona una categoria"
      }
    } else {
      this.errorMessage = "Escribe un nombre"
    }

  }
}
