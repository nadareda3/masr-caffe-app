import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
 cartItemCount: number = 0;

  constructor(private cartService: CartService,router: Router) {}

  ngOnInit(): void {
     this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
  });
}

}
