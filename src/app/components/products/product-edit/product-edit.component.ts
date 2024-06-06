import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  nombre!: string;
  category!: any;
  count!: string;
  description!: string;
  discount!: string;
  sellingPrice!: number;
  buyingPrice!: number;
  opciones: Category[] = [
    { productcategoryId: '3fa85f64-5717-4562-b3fc-2c963f66afa6', productcategoryName: 'Categoria Generica', productcategoryDescription: 'Opción 1', updatedDate: new Date }
  ];
  categoriaSeleccionada: Category = this.opciones[0];
  currentProductId: String = "";

  constructor(private _productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentProductId = this.route.snapshot.queryParamMap.get('id')?.toString()!
    })
    this.loadProduct();
  }

  onSubmit() {
    const product: Product = {
      productName: this.nombre,
      productCategoryId: this.categoriaSeleccionada.productcategoryId!,
      itenCount: this.count,
      description: this.description,
      discount: this.discount,
      sellingPrice: this.sellingPrice,
      buyingPrice: this.buyingPrice
    };

    this._productService.createProduct(product).subscribe(response => {
      console.log(response);
      if (response) {
        alert("Producto Registrado")
      }
    }, error => {
      console.error(error);
    });
  }
  loadProduct() {
    var x = this._productService.createProduct
  }
}


