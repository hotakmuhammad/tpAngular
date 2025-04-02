import { Component} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  {

  // Product information
  id !: number; 

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  } 
} 