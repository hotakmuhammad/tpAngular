import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { IProducts } from '../../interface/IProducts';
import { IProductParDawan } from '../../interface/IProductParDawan';

import { ProductParDawanService } from '../../service/pardawan/product-par-dawan.service';
import { AddProductComponent } from "./addProduct/add-product/add-product.component";


@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, FormsModule, AddProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: IProducts[] = [];
  productParDawan: IProductParDawan[] = [];
  productId !: number;
  searchValue: string = ''
  isSearchInputVisible: boolean = false;
  isAddProductVisible: boolean = false;

  constructor(
    private router: Router,
    private productsService: ProductsService, 
    private productParDawanService: ProductParDawanService) {

  }

  ngOnInit(): void {
      this.loadProducts();
      this.loadProductsParDawan();
  }

  loading = false;
  // Navigate to product details page
  findProduct() {
    if(this.productId === null && this.productId === undefined || isNaN(this.productId)) {
      return;
    } 
    this.loading = true;
    this.productParDawanService.getProductsParDawanById(this.productId)
    .subscribe({
      next: (response) => {
        this.loading = false;
        if(response) {
          this.router.navigate(['/products', this.productId]);
        } else {
          alert(`Product not found! , ${this.productId}`);
        }
      },
      error: () => {
        this.loading = false;
        alert(`Error: product with id ${this.productId} not found!`);
      }
    })
  }
  loadProductsParDawan() {
    this.productParDawanService.getProductsParDawan()
    .subscribe({
      next: (response: any) => 
        this.productParDawan = response,
        error: (error: any) => console.log(error),
        // complete: () => console.log('Products loaded successfully')
      
    })
  }


  loadProducts() {
    this.productsService.getProducts()
      .subscribe({
        next: (response: any) => 
        this.products = response,
        error: (error: any) => console.log(error),
        // complete: () => console.log('Products loaded successfully')
      }) 
  }

  searchProduct() {
    const searchValue = this.searchValue.toLowerCase();
    this.products = this.products.filter(product => product.name?.toLocaleLowerCase().includes(searchValue));
    this.productParDawan = this.productParDawan.filter(product => product.title?.toLocaleLowerCase().includes(searchValue) 
      || product.description?.toLocaleLowerCase().includes(searchValue)
      || product.slug?.toLocaleLowerCase().includes(searchValue));
  }
 
  toggleSearch(e: Event): void {
    e.preventDefault();
    this.isSearchInputVisible = !this.isSearchInputVisible;
  }



  toggleAddProduct(e: Event): void {
    e.preventDefault();
    this.isAddProductVisible = !this.isAddProductVisible;
  }


}


