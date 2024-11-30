import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  // Import BehaviorSubject
interface CartItem {
  id: number;
  desc: string;
  brand: string;
  price: string;
  image: string;
  quantity: number; // To track quantity of each item
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
 private cartItems: CartItem[] = []; // Use cartItems here
 private cartItemCount = new BehaviorSubject<number>(0); // BehaviorSubject to track item count
  constructor() {}

  addToCart(product: CartItem):void {
    const found = this.cartItems.find(item => item.id === product.id); // Use cartItems instead of items
    if (found) {
      found.quantity += 1; // Increment quantity if the item is already in the cart
    } else {
      product.quantity = 1; // Add the item with quantity 1
      this.cartItems.push(product); // Use cartItems instead of items
    }
     this.updateCartItemCount(); // Update the count after adding an item
  }

  getItems(): CartItem[] {
    return this.cartItems; // Use cartItems instead of items
  }

  clearCart() {
    this.cartItems = []; // Use cartItems instead of items
     this.updateCartItemCount(); // Update the count after clearing the cart
  }
   getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
    getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => {
      // Assuming price is a string with currency (e.g., "45000 EGP"), extract the numeric part
      const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return acc + (price * item.quantity);
    }, 0);
  }

   // Method to return cart item count as an observable
  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }
    // Private method to update the cart item count
  private updateCartItemCount() {
    const totalItems = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartItemCount.next(totalItems); // Notify all subscribers of the new count
  }
}
