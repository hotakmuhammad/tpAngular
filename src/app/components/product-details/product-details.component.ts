import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  {

  // Product information
  id !: number;
  
  
  // @Input() name!: string;
  // @Input() description!: string;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  } 
} 