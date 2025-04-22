import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IProductParDawan } from '../../../../../interface/IProductParDawan';

@Component({
  selector: 'app-update-product',
  imports: [CommonModule,
            ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnChanges{

  updateForm: FormGroup

  @Input() product?: IProductParDawan
  @Output() passDataToParent = new EventEmitter<IProductParDawan>();
  @Output() passDataToParentDelete = new EventEmitter<IProductParDawan>();
  constructor() {
    this.updateForm = new FormGroup({
   
        id: new FormControl(''), 
        title: new FormControl(''),
        price: new FormControl(0),
        image: new FormControl(''),
        description: new FormControl(''),
        slug: new FormControl(''),
        category: new FormControl('')

    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['product']) {
      console.log('Product update successfuly')
      if(this.product) {
            this.updateForm.patchValue({
              id: this.product.id,
              title: this.product.title,
              price: this.product.price,
              image: this.product.image,
              description: this.product.description,
              slug: this.product.slug,
              category: this.product.category
            })
          }
    }
  } 
  onSubmit() {
    if(this.updateForm.valid && this.product) {
      const response: IProductParDawan = {...this.product, ...this.updateForm.value};
      this.passDataToParent.emit(response);

    }
  }

  handleUpdateProduct() {
      this.passDataToParent.emit(this.updateForm.value);
  }
}
