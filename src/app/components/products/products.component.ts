import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 

  productId !: number;
  products = [
    { id: 1, name: 'Apple iPhone 15 Pro', price: 999, description: 'The latest Apple iPhone with A17 Pro chip and titanium design.' },
    { id: 2, name: 'Samsung Galaxy S23 Ultra', price: 1199, description: 'Flagship Samsung phone with 200MP camera and S Pen.' },
    { id: 3, name: 'Sony PlayStation 5', price: 499, description: 'Next-gen gaming console with ultra-fast SSD and ray tracing.' },
    { id: 4, name: 'Microsoft Xbox Series X', price: 499, description: 'Powerful gaming console with 4K gaming and Game Pass support.' },
    { id: 5, name: 'Apple MacBook Air M2', price: 1099, description: 'Lightweight and powerful laptop with Apple’s M2 chip.' },
    { id: 6, name: 'Dell XPS 15', price: 1399, description: 'Premium Windows laptop with OLED display and Intel Core i9.' },
    { id: 7, name: 'Samsung 55” OLED TV', price: 1599, description: '4K OLED Smart TV with Quantum HDR and Dolby Atmos.' },
    { id: 8, name: 'Bose QuietComfort 45', price: 329, description: 'Wireless noise-canceling headphones with superior audio quality.' },
    { id: 9, name: 'Sony WH-1000XM5', price: 399, description: 'Industry-leading noise-canceling headphones with 30-hour battery.' },
    { id: 10, name: 'Apple Watch Series 9', price: 399, description: 'Advanced smartwatch with new S9 chip and health tracking features.' },
    { id: 11, name: 'Samsung Galaxy Watch 6', price: 349, description: 'Smartwatch with Wear OS and advanced health monitoring.' },
    { id: 12, name: 'NVIDIA GeForce RTX 4090', price: 1599, description: 'High-end graphics card for 4K gaming and AI processing.' },
    { id: 13, name: 'ASUS ROG Zephyrus G14', price: 1499, description: 'Powerful gaming laptop with AMD Ryzen 9 and RTX 4060.' },
    { id: 14, name: 'GoPro Hero 12 Black', price: 449, description: 'Action camera with 5.3K recording and improved stabilization.' },
    { id: 15, name: 'DJI Mini 4 Pro', price: 759, description: 'Compact drone with 4K video and intelligent flight modes.' },
    { id: 16, name: 'Logitech MX Master 3S', price: 99, description: 'Ergonomic wireless mouse with ultra-fast scrolling.' },
    { id: 17, name: 'Razer BlackWidow V4 Pro', price: 229, description: 'Mechanical gaming keyboard with RGB lighting and macro keys.' },
    { id: 18, name: 'Anker PowerCore 26800', price: 69, description: 'High-capacity portable charger with fast charging support.' },
    { id: 19, name: 'Amazon Echo Dot (5th Gen)', price: 49, description: 'Smart speaker with Alexa and improved sound quality.' },
    { id: 20, name: 'Kindle Paperwhite', price: 139, description: 'Waterproof e-reader with adjustable warm light and long battery life.' }
  
  ];

  constructor(private router: Router) {

  }

  // Navigate to product details page
  findProduct() {
    if(this.productId !== null && this.productId >= 0) {
       this.router.navigate(['/products', this.productId]);
      
    }
  }
}


