import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class Api2Service {



  // constructor(private _HttpClient : HttpClient) {}
  products = [
    {id:1, desc: "Wacaco DG Kit",
    brand: "Philips", price: "1100 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/10420455901.png"},
    {id:2, desc: "Philips 3300 ",
    brand: "Philips", price: "45000 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/00CD-688838.jpeg"},
    {id:3, desc: "Philips 2200 ",
    brand: "Philips", price: "36000 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/M09A-356044.jpeg"},
    {id:4, desc: "Siemens EQ.500",
    brand: "Siemens", price: "46999 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/Q2NP-A71344.jpeg"},
    {id:5, desc: "DeLonghi La Specialista EC9335 BK",
    brand: "Delonghi", price: "49999 EGP", image: "https://www.espressoclubegypt.com/uploads/product/source/10040262934.jpeg"},
    {id:6, desc: "Delonghi Dedica Style EC 685.M",
    brand: "Delonghi", price: "9800 EGP", image: "https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/1/6/161409058452bncfxe_1.png?format=webp&width=368"},
    {id:7, desc: "Delonghi Dinamica Plus ",
    brand: "Delonghi", price: "69,999 EGP", image: "https://www.cafelax.com/cdn/shop/files/3_973b7f8f-2828-4b35-bbfa-2b6ddf8a0e00.png?v=1722194417&width=640"},
    {id:8, desc: "Nespresso Essenza ",
    brand: "Nespresso", price: "9,999 EGP", image: "https://www.cafelax.com/cdn/shop/files/1_fe766762-de55-42a2-bc6a-bae20b9550c0.png?crop=center&height=480&v=1693855510&width=640"},
    {id:9, desc: "Nespresso Gran Lattissima ",
    brand: "Nespresso", price: "28,990 EGP", image: "https://www.cafelax.com/cdn/shop/files/nespresso-gran-lattissima-black_2.jpg?crop=center&height=480&v=1683970413&width=640"}


]


  productsdata = [
    {pdid:1, pddesc: "Wacaco DG Kit",pdcategory:"Home Machines",
    pdbrand: "Philips", pdprice: "1100 EGP", pdimage: "https://www.espressoclubegypt.com/uploads/product/source/10420455901.png"},
    {pdid:2, pddesc: "Philips 3300 ",pdcategory:"Home Machines",
    pdbrand: "Philips", pdprice: "45000 EGP", pdimage: "https://www.espressoclubegypt.com/uploads/product/source/00CD-688838.jpeg"},
    {pdid:3, pddesc: "Philips 2200 ",pdcategory:"Home Machines",
    pdbrand: "Philips", pdprice: "36000 EGP", pdimage: "https://www.espressoclubegypt.com/uploads/product/source/M09A-356044.jpeg"},
    {pdid:4, pddesc: "Siemens EQ.500",pdcategory:"Home Machines",
    pdbrand: "Siemens", pdprice: "46999 EGP", pdimage: "https://www.espressoclubegypt.com/uploads/product/source/Q2NP-A71344.jpeg"},
    {pdid:5, pddesc: "DeLonghi La Specialista EC9335 BK",pdcategory:"Home Machines",
    pdbrand: "Delonghi", pdprice: "49999 EGP", pdimage: "https://www.espressoclubegypt.com/uploads/product/source/10040262934.jpeg"},
    {pdid:6, pddesc: "Delonghi Dedica Style EC 685.M",pdcategory:"Home Machines",
    pdbrand: "Delonghi", pdprice: "9800 EGP", pdimage: "https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/1/6/161409058452bncfxe_1.png?format=webp&width=368"},
    {pdid:7, pddesc: "Delonghi Dinamica Plus ",pdcategory:"Home Machines",
    pdbrand: "Delonghi", pdprice: "69,999 EGP", pdimage: "https://www.cafelax.com/cdn/shop/files/3_973b7f8f-2828-4b35-bbfa-2b6ddf8a0e00.png?v=1722194417&width=640"},
    {pdid:8, pddesc: "Nespresso Essenza ",pdcategory:"Home Machines",
    pdbrand: "Nespresso", pdprice: "9,999 EGP", pdimage: "https://www.cafelax.com/cdn/shop/files/1_fe766762-de55-42a2-bc6a-bae20b9550c0.png?crop=center&height=480&v=1693855510&width=640"},
    {pdid:9, pddesc: "Nespresso Gran Lattissima ",pdcategory:"Home Machines",
    pdbrand: "Nespresso", pdprice: "28,990 EGP", pdimage: "https://www.cafelax.com/cdn/shop/files/nespresso-gran-lattissima-black_2.jpg?crop=center&height=480&v=1683970413&width=640"}


]




Slider = [

]



 }


