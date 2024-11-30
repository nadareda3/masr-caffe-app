import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class Api3Service {



  // constructor(private _HttpClient : HttpClient) {}
products = [
    {_id:1, desc: "Wega Nova", description: "Nova breaks down the classic aesthetic architectures of coffee machines. Geometrically defined volumes are reassembled to give life to a design with an innovative language, whose shapes are dictated by the functionality of the product.",
    brand: "Wega", price: "270,000 EGP", image: "https://cdn.sanity.io/images/w5djgl78/production/f5d804187cd0f085d52aba0c5b71eef28abc7477-3550x3550.webp?auto=format"},
    {_id:2, desc: "Lamarzocco Linea Mini", description: "Bring home an espresso icon. The Linea Mini is a machine for those who dream of crafting the perfect espresso, and a companion for adventures at home and beyond. The Linea Mini looks as beautiful as it performs, ready to serve anywhere for years to come.",
    brand: "Lamarzocco", price: "250,000 EGP", image: "https://lamarzocco.com/it/wp-content/uploads/2023/06/lm-home-linea-mini.png"},
    {_id:3, desc: "Lamarzocco Strada", description: "a machine developed by baristas for baristas, featuring sleek italian design that can be customized",
    brand: "Lamarzocco", price: "1,070,000 EGP", image: "https://lamarzocco.com/it/wp-content/uploads/2023/09/X_2-gr-Back.png"},
    {_id:4, desc: "Lamarzocco Linea Classic", description: "The clean lines and charm of the Linea Classic occupies many of the cafes, roasteries, and chains whose names have defined the industry. The Linea Classic has helped to forge the world of coffee over the last 3 decades. Since its introduction, the Linea Classic has continuously been improved and updated to ensure it continues to deliver unrivaled value.",
    brand: "Lamarzocco", price: "550,000 EGP", image: "https://lamarzocco.com/it/wp-content/uploads/2023/04/linea-classic-s-av-group_front.png"},
    {_id:5, desc: "Lamarzocco Linea Pb", description: "The Linea PB, designed by and named in recognition of Piero Bambi, introduces a new level of performance, reliability, and craftsmanship. The Linea PB features the iconic La Marzocco polished stainless steel body, updated with simplified lines and a lower profile, equipped with exclusive, user friendly interface software that gives the barista direct functional control over boiler temperature, brewing volume, hot water tap dose, auto-back flush as well as other options",
    brand: "Lamarzocco", price: "750,000 EGP", image: "https://lamarzocco.com/it/wp-content/uploads/2023/04/linea-pb-av-group_front.png"},
    {_id:6, desc: "Slayer Steam EP", description: "Specialty Coffee deserves nothing less. Slayer Steam EP offers, by default, what the industry has long considered “optional”. We believe you’re entitled to the temperature stability afforded by individual group boilers, quick and easy to access volumetric dosing, and high-quality parts that require less maintenance over time. At Slayer we’ve worked behind the bar, we’ve operated cafes, and we’ve serviced machines. That’s why we’re able to include thoughtful features like a programmable Pre-Wet phase, massive drip tray to work on, low counter height to encourage customer engagement, and easy access to internal parts. Designed with the needs of the modern speciality cafe in mind, Steam EP was made for coffee people, by coffee people.",
    brand: "Slayer", price: "700,000 EGP", image: "https://slayerespresso.com/wp-content/uploads/2021/05/ep-spec-img.jpg"},
    {_id:7, desc: "Slayer Steam LP", description: "A dream come true for those seeking incredible control and accuracy through pressure profiling and repeatability functions. Easily extract delicious espresso every time with programmable pre-infusion, post-infusion, and volumetric output settings. You’ll experience the best of both worlds with the LP’s ability to work in both manual and volumetric modes. This incredibly intuitive machine can automatically record your settings while you make a coffee, making it easy to make the same great shot all day. The perfect tool to maximize your coffee experience on every level is here!",
    brand: "Slayer", price: "850,000 EGP", image: "https://slayerespresso.com/wp-content/uploads/2021/05/lpx-turquoise-blue.jpg"},
    {_id:8, desc: "Nuova Simonelli Appia Life", description:"Appia Life is created based on the success of the Appia. With its high productivity and high performance, this machine is appreciated by thousands of baristas worldwide. Simple and innovative. Appia life stands out, not only for its proven reliability but also for the modern style that makes it unique. It is the perfect coffee machine for large companies, coffee shop chains or wherever there is a need to prepare an abundance of great coffee. Appia Life is designed to save energy, sustain the environment, and be cost-effective.",
    brand: "Nuova Simonelli", price: "280,000 EGP", image: "https://nuovasimonelli.it/appialife/assets/imgs/appia-life-nuova-simonelli-XT_2grAlti_bianco_34sx.png"},
    ]



Slider = [

]
  static products: any;


 }


