import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Import the cart service

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; // Array to hold the cart items
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Retrieve cart items from the CartService when the component initializes
    this.cartItems = this.cartService.getItems();
     // Calculate the total price
    this.totalPrice = this.cartService.getTotalPrice();
  }
  // Optional: Function to clear the cart
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = []; // Clear the local cart items as well
     this.totalPrice = 0;
  }
}
