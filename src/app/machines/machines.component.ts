import { Component, OnInit } from '@angular/core';
import { Api2Service } from '../api2.service'; // Adjust the path as necessary
import { CartService } from '../cart.service'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css'],
  imports:[CommonModule],
  standalone:true
})
export class MachinesComponent implements OnInit {
  dataContainer: any[] = [];

  constructor(private api2Service: Api2Service, private cartService: CartService) {}

  ngOnInit(): void {
    this.dataContainer = this.api2Service.products; // Fetch products from the ApiService
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product); // Add product to the cart
    // alert(`${product.brand} has been added to your cart!`); // Optional: Alert the user
  }
}

