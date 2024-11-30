import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private apiUrl = 'https://fake-coffee-api.vercel.app/api';

  constructor(private http: HttpClient) {}

  // This method should return an Observable of any[]
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Ensure this is correct
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
