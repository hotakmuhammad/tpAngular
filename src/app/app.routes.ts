import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { TitleComponent } from './components/title/title.component';


export const routes: Routes = [

    {
        path: '',
        component: TitleComponent,
    },
    {
        path: 'products',
        //loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent),
        component: ProductsComponent
     
    },
    {
        path: 'products/:id',
        component: ProductDetailsComponent,
    },

];
