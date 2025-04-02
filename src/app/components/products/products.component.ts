import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { IProducts } from '../../interface/IProducts';
import { IProductParDawan } from '../../interface/IProductParDawan';

import { ProductParDawanService } from '../../service/pardawan/product-par-dawan.service';


@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: IProducts[] = [];
  productParDawan: IProductParDawan[] = [];
  productId !: number;
  searchValue: string = ''

  constructor(
    private router: Router,
    private productsService: ProductsService, 
    private productParDawanService: ProductParDawanService) {

  }

  ngOnInit(): void {
      this.loadProducts();
      this.loadProductsParDawan();
  }
  // Navigate to product details page
  findProduct() {
    if(this.productId !== null && this.productId >= 0) {
      this.router.navigate(['/products', this.productId]);
      
    }
  }
  loadProductsParDawan() {
    this.productParDawanService.getProductsParDawan()
    .subscribe({
      next: (response: any) => 
        
        {console.log(response)
        this.productParDawan = response},
        error: (error: any) => console.log(error),
        complete: () => console.log('Products loaded successfully')
      
    })
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

  searchProduct() {
    const searchValue = this.searchValue.toLowerCase();
    this.products = this.products.filter(product => product.name?.toLocaleLowerCase().includes(searchValue));
    this.productParDawan = this.productParDawan.filter(product => product.title?.toLocaleLowerCase().includes(searchValue));
  }
 


}


