import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent {
  nombre!: string;
  descripcion!: string;

  constructor(private categoryService: CategoryService) {
  }

  onSubmit() {
    const kteg: Category = {
      productcategoryName: this.nombre,
      productcategoryDescription: this.descripcion
    };

    this.categoryService.createCategory(kteg).subscribe(response => {
      console.log(response);
      if (response) {
        alert("Categoria Registrada")
      }
    }, error => {
      console.error(error);
    });
  }
}
