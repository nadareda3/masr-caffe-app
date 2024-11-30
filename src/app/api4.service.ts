import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor(private _HttpClient : HttpClient) {}
 products=[
  {
    name: "Delonghi Thermal mug DLSC055",
    image: "https://www.espressoclubegypt.com/uploads/product/source/ALLZ-886932.jpeg",
    price: "1944 EGP"
  },
  {
    name: "Costa Cappuccino Cup with underline - Green",
    image: "https://www.espressoclubegypt.com/uploads/product/source/WIX0-V27578.jpeg",
    price: "125 EGP"
  },
  {
    name: "Dolenghi double wall thermal espresso cups - 2 cups",
    image: "https://www.espressoclubegypt.com/uploads/product/source/F1T3-283978.jpeg",
    price: "1499 EGP"
  },
  {
    name: "Costa Espresso with under line Cup - glaze",
    image: "https://www.espressoclubegypt.com/uploads/product/source/4WP3-A19475.jpeg",
    price: "120 EGP"
  },
  {
    name: "Espresso cup with underline - G7 (A)",
    image: "https://www.espressoclubegypt.com/uploads/product/source/433Y-Z40847.jpeg",
    price: "99 EGP"
  },
  {
    name: "Espresso cup with underline G2(B)",
    image: "https://www.espressoclubegypt.com/uploads/product/source/8C5R-E25209.jpeg",
    price: "99 EGP"
  },
  {
    name: "Costa Flat white Cup with underline - glaze",
    image: "https://www.espressoclubegypt.com/uploads/product/source/WXKS-B11184.jpeg",
    price: "130 EGP"
  },
  {
    name: "Wacaco Nanovessel 3 in 1 Stainless Steel Vacuum Insulated Flask",
    image: "https://www.espressoclubegypt.com/uploads/product/source/10579545359.png",
    price: "1500 EGP"
  }
]



 }


