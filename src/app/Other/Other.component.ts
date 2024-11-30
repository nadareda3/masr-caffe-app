
import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service'; // Adjust the path as necessary


@Component({
  selector: 'app-Other',
  templateUrl: './Other.component.html',
  styleUrls: ['./Other.component.css'],
  imports:[CommonModule],
  standalone:true
})
export class OtherComponent  {


 dataContainer: any[] = [];


constructor(private _ApiService: ApiService,private cartService: CartService) {}
  ngOnInit(): void {
    this.dataContainer = this._ApiService.other_products; // Fetch products from the ApiService
  }
    addToCart(product: any): void {
    this.cartService.addToCart(product); // Add product to the cart
    // alert(`${product.brand} has been added to your cart!`); // Optional: Alert the user
  }
}
