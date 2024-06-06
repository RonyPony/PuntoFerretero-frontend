import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://216.172.100.170:8099/api';

  constructor(
    private http: HttpClient
  ) {

  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + "/ProductCategory/ProductCategory");
  }
  getCategoryById(id: string): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + "/ProductCategory/ProductCategory/" + id);
  }
  createCategory(Category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl + "/ProductCategory/ProductCategory", Category);
  }
}
