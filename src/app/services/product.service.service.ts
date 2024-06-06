import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://216.172.100.170:8099/api';

  constructor(
    private http: HttpClient
  ) {

  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + "/Product/Product");
  }
  getProductById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + "/Product/Product");
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + "/Product/Product", product);
  }
}
