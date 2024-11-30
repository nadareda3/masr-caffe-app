import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  name: string;
  image: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private jsonUrl = 'assets/product.json'; // Adjust the path if necessary

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }
}


