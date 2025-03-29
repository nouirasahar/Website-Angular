import { NavbarComponent } from '../navbar/navbar.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  onGetStarted() {
    this.router.navigate(['/start']);
  }
} 