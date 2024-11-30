import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor(private _HttpClient : HttpClient) {}
  other_products=[
  {
    id:1,
    desc: "Delonghi Thermal mug DLSC055",
    brand:"",
     price: "1944 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/ALLZ-886932.jpeg",

  },
  {
    id:2,
    desc: "Costa Cappuccino Cup with underline - Green",
    brand:"",
    price: "125 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/WIX0-V27578.jpeg",

  },
  {
    id:3,
    desc: "Dolenghi double wall thermal espresso cups - 2 cups",
    brand:"",
    price:"1499 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/F1T3-283978.jpeg",

  },
  {
    id:4,
    desc: "Costa Espresso with under line Cup - glaze",
     brand:"",
    price:"120 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/4WP3-A19475.jpeg",

  },
  {
    id:5,
    desc: "Espresso cup with underline - G7 (A)",
     brand:"",
    price:"99 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/433Y-Z40847.jpeg",

  },
  {
    id:6,
    desc: "Espresso cup with underline G2(B)",
     brand:"",
    price:"99 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/8C5R-E25209.jpeg",

  },
  {
    id:7,
    desc: "Costa Flat white Cup with underline - glaze",
     brand:"",
    price:"130 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/WXKS-B11184.jpeg",

  },
  {
    id:8,
    desc: "Wacaco Nanovessel 3 in 1 Stainless Steel Vacuum Insulated Flask",
     brand:"",
    price:"1500 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/10579545359.png",

  }
]
tools_products=[
  {
    id:1,
    desc: "Milk Frother Stainless Steel 400 ml",
     brand:"",
    price:"550 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/WFFC-E70560.jpeg",

  },
  {
    id:2,
    desc: "French press 1000 Ml",
     brand:"",
    price:"1050 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/L0F6-W82227.jpeg",

  },
  {
    id:3,
    desc: "Milk Frother - 600ml",
     brand:"",
    price:"620 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/F06Q-S38637.jpeg",

  },
  {
    id:4,
    desc: "Milk & Coffee Frother With Heat Proof Glass 450 ML",
     brand:"",
    price:"280 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/V9OD-M26423.jpeg",

  },
  {
    id:5,
    desc: "Bialetti Tutto Crema 3 Cups Milk Frother – Black",
     brand:"",
    price:"240 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/10100576490.webp",

  },
  {
    id:6,
    desc: "Pitcher motta 350 ml",
     brand:"",
    price:"550 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/20702.jpeg ",

  },
  {
    id:7,
    desc: "Pitcher 550 ml",
     brand:"",
    price:"850 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/82967.webp ",

  },
  {
    id:8,
    desc: " Tamper Metal 51 ml",
     brand:"",
    price:"425 EGP",
    image: "https://www.espressoclubegypt.com/uploads/product/source/10557889819.jpeg",

  }
]
  machines_products = [
    {id:1, desc: "Wacaco DG Kit, Accessory for Nanopresso Portable Espresso Machine, Compatible with DG Coffee Capsules",
    brand: "Philips", price: "1100 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/10420455901.png"},
    {id:2, desc: "Philips 3300 Series Fully Automatic Espresso Machine 6 Drinks EP3347/90",
    brand: "Philips", price: "45000 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/00CD-688838.jpeg"},
    {id:3, desc: "Philips 2200 Series Fully Automatic Espresso Machine - 4 Drinks EP2220/10",
    brand: "Philips", price: "36000 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/M09A-356044.jpeg"},
    {id:4, desc: "Siemens EQ.500",
    brand: "Siemens", price: "46999 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/Q2NP-A71344.jpeg"},
    {id:5, desc: "DeLonghi La Specialista EC9335 BK",
    brand: "Delonghi", price: "49999 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/10040262934.jpeg"},
    {id:6, desc: "Delonghi Dedica Style EC 685.M",
    brand: "Delonghi", price: "9800 EGP", image: "https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/1/6/161409058452bncfxe_1.png?format=webp&width=368"},
    {id:7, desc: "Delonghi Dinamica Plus Bean To Cup Espresso Machine - 18 Drinks",
    brand: "Delonghi", price: "69,999 EGP", image: "https://www.cafelax.com/cdn/shop/files/3_973b7f8f-2828-4b35-bbfa-2b6ddf8a0e00.png?v=1722194417&width=640"},
    {id:8, desc: "Nespresso Essenza Mini Rectangular Machine",
    brand: "Nespresso", price: "9,999 EGP", image: "https://www.cafelax.com/cdn/shop/files/1_fe766762-de55-42a2-bc6a-bae20b9550c0.png?crop=center&height=480&v=1693855510&width=640"},
    {id:9, desc: "Nespresso Gran Lattissima Espresso Capsules Machine",
    brand: "Nespresso", price: "28,990 EGP", image: "https://www.cafelax.com/cdn/shop/files/nespresso-gran-lattissima-black_2.jpg?crop=center&height=480&v=1683970413&width=640"}


]
  products: any[] = [];

 }


