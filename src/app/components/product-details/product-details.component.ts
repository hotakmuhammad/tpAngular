import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  {

  // private id!:number;
  id !: number;
  name !: string;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  


}
