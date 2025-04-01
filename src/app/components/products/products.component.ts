import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  constructor() {
  }

  products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 300, description: 'Description of Product 3' },
    { id: 4, name: 'Product 4', price: 400, description: 'Description of Product 4' },
    { id: 5, name: 'Product 5', price: 500, description: 'Description of Product 5' },
    { id: 6, name: 'Product 6', price: 600, description: 'Description of Product 6' },
    { id: 7, name: 'Product 7', price: 700, description: 'Description of Product 7' },
    { id: 8, name: 'Product 8', price: 800, description: 'Description of Product 8' },
    { id: 9, name: 'Product 9', price: 900, description: 'Description of Product 9' },
    { id: 10, name: 'Product 10', price: 1000, description: 'Description of Product 10' }
  ];
}
