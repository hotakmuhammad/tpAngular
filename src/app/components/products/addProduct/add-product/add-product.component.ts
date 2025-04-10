import { Component, OnInit } from '@angular/core';
import { ProductParDawanService } from '../../../../service/pardawan/product-par-dawan.service';
import { Router } from '@angular/router';
import { IProductParDawan } from '../../../../interface/IProductParDawan';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  addProduct!: FormGroup;
  // postForm!: FormGroup
  productPardawan: IProductParDawan[] =[];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productPardawanService: ProductParDawanService,) {

  }
 

  
  ngOnInit(): void {
   
    this.addProduct = this.formBuilder.group({
      title:['', Validators.required],
      price:['', [Validators.required, Validators.min(0)]],
      image: [null, Validators.required],
      description: ['', Validators.required],
      slug: ['', Validators.required],
      category: ['', Validators.required]
    })

  }

  postProduct(product: IProductParDawan) {
    this.productPardawanService.addProduct(product)
    .subscribe({
      next: (response: any) =>{
        console.log(response)
        this.productPardawan = response
      },
      error: (error: any) =>
        console.log(error),
      complete:() =>
        console.log('Product add successfully')
    })
  }

  onSubmit() {
    if(this.addProduct.valid) {
      const productData: IProductParDawan = this.addProduct.value;
      this.postProduct(productData);
      this.addProduct.reset();
    }else{
      console.log('Form is invalid');
    }


  }
}
