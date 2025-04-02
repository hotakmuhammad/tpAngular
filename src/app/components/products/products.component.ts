import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { IProducts } from '../../interface/IProducts';


@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
 products: IProducts[] = [];

  productId !: number;


  constructor(
    private router: Router,
    private productsService: ProductsService){

  }

  ngOnInit(): void {
      this.loadProducts();
  }
  // Navigate to product details page
  findProduct() {
    if(this.productId !== null && this.productId >= 0) {
       this.router.navigate(['/products', this.productId]);
      
    }
  }

  loadProducts() {
    this.productsService.getProducts()
      .subscribe({
        next: (response: any) => 
          {console.log(response)
         this.products = response},
        error: (error: any) => console.log(error),
        complete: () => console.log('Products loaded successfully')
      }) 
  }
}


