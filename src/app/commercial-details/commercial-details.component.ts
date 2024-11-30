import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api3Service } from '../api3.service';

@Component({
  selector: 'app-commercial-details',
  templateUrl: './commercial-details.component.html',
  styleUrl: './commercial-details.component.css'
})
export class CommercialDetailsComponent {

  constructor(private _ActivatedRoute1:ActivatedRoute, private _Api3Service1:Api3Service){}

  getP:any;
  getDet:any;

  ngOnInit():void {
    this.getP = this._ActivatedRoute1.snapshot.paramMap.get('_id');

    this._Api3Service1.products.filter((el:any)=>{
      if(el.id == this.getP){
        this.getDet=el;
      }
    })
  }

}
