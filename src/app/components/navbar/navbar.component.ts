import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { NavBarItemsComponent } from "../nav-bar-items/nav-bar-items.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,  NavBarItemsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {



  navBarItems = [
    { name: 'Home',route: '/' },
    {name: 'Produits', route: '/products'},
    {name: 'Boutique', route: '/boutique'},
    {name: 'PokeMon', route: '/poke-mon'},
    {name: 'Login', route: '/auth'}
  ]
}
