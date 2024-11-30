import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CoffeeService } from './service/coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
  standalone: true, // Ensure this is set to true
  imports: [CommonModule], // Add CommonModule to imports array
})
export class CoffeeComponent implements OnInit {
  products: any[] = [];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getProducts().subscribe(
      (response) => {
        this.products = response; // Store the fetched products in the products array
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(item: any): void {
    console.log('Add to cart:', item);
    // Implement your cart logic here
  }
}
