import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

import { IProductParDawan } from '../../interface/IProductParDawan';
import { ProductParDawanService } from '../../service/pardawan/product-par-dawan.service';
import { UpdateProductComponent } from "../products/addProduct/updateProduct/update-product/update-product.component";
import { response } from 'express';

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
  // service?: ProductParDawanService;

  constructor(private route: ActivatedRoute, private service: ProductParDawanService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  } 

  ngOnInit(): void {
      this.loadProduct()
  }

  loadProduct() {
    this.service.getProductsParDawanById(this.id).subscribe({
      next: (response) => {
        if (!response) {
          throw new Error(`No product found with ID: ${this.id}`);
        }
        this.product = response;
      } 
    });
  }

  handleUpdateProduct() {
    this.displayProduct = !this.displayProduct
  }

  updateMainProduct(product: IProductParDawan) {
    // console.log('Data recieved from child form', product);
    this.service.updateProductParDawan(product).subscribe((response) => {
      console.log('Product updated successfully', response);
      this.product = response;
      this.displayProduct = false;
      this.loadProduct();
    }
  )}

  handleDeleteProduct(product: IProductParDawan) {
    if (!product?.id) {
      alert('No product selected or invalid product ID');
      return;
    }
    this.service.deleteProductPardawan(product.id)
    .subscribe({
      next: () => {
        this.loadProduct();
        alert('Product deleted successfully!');
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
      }
    })
  }
} 