import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  sidebar: boolean = false;

  toggleSidebar(){
    this.sidebar = !this.sidebar;
  }
}
