import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

import { IProductParDawan } from '../../interface/IProductParDawan';
import { ProductParDawanService } from '../../service/pardawan/product-par-dawan.service';
import { UpdateProductComponent } from "../products/addProduct/updateProduct/update-product/update-product.component";

@Component({
  selector: 'app-product-details',
  imports: [RouterOutlet, RouterLink, UpdateProductComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  // Product information
  id !: number; 
  product?: IProductParDawan; 
  displayProduct: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProductParDawanService) {
    this.id = this.route.snapshot.params['id'];
  } 

  ngOnInit(): void {
      this.loadProduct()
  }

  loadProduct() {
    this.service.getProductsParDawanById(this.id).subscribe((response=> this.product = response));
  }

  handleUpdateProduct() {
    this.displayProduct = !this.displayProduct
  }
} 