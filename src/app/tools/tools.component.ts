
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  imports:[CommonModule],
  standalone:true
})
export class ToolsComponent   {


 dataContainer: any[] = [];




constructor(private _ApiService: ApiService, private cartService: CartService) {}
 ngOnInit(): void {
    this.dataContainer = this._ApiService.tools_products; // Fetch products from the ApiService
  }
   addToCart(product: any): void {
    this.cartService.addToCart(product); // Add product to the cart
    // alert(`${product.brand} has been added to your cart!`); // Optional: Alert the user
  }

}

