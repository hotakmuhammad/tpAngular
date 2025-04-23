import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar-items',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './nav-bar-items.component.html',
  styleUrl: './nav-bar-items.component.css'
})
export class NavBarItemsComponent {

  constructor() { }
  @Input() navBarItems: { name: string, route: string, icon?: string }[] = [];
}
