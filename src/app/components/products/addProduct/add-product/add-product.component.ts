import { Component, OnInit } from '@angular/core';
import { ProductParDawanService } from '../../../../service/pardawan/product-par-dawan.service';
import { Router } from '@angular/router';
import { IProductParDawan } from '../../../../interface/IProductParDawan';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{



  postForm: FormGroup = new FormGroup({
    title: new FormControl(['', Validators.required]) ,
    price: new FormControl (['', [Validators.required, Validators.min(0)]]),
    image: new FormControl ([null, Validators.required]),
    description: new FormControl (['', Validators.required]),
    slug: new FormControl (['', Validators.required]),
    category: new FormControl (['', Validators.required])
  });


  productPardawan: IProductParDawan[] =[];
  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private productPardawanService: ProductParDawanService,) {

  }
  ngOnInit(): void {
    // this.postForm = this.formBuilder.group
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
  //   if(this.postForm.valid) {
  //     const formData = new FormData();
  //     formData.append('title', this.postForm.get('title').value);
  //     formData.append('price', this.postForm.get('price').value);
  //     formData.append('image', this.postForm.get('image').value);
  //     formData.append('description', this.postForm.get('description').value);
  //     formData.append('slug', this.postForm.get('slug').value);
  //     formData.append('category', this.postForm.get('category').value)

  //     this.postProduct(formData)
  //     .subscribe({
  //       next: response => console.log('Product added :', response),
  //       error: error => console.log('Error : ', error),
  //       complete: () => this.console.log('Product submission completed')
  //     })
  //   }


  }
}
