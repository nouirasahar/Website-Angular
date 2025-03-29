import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  constructor(private router: Router) {}

  onStartBuilding() {
    console.log("Start Building button clicked!"); // Vérifie si ce message s'affiche dans la console
    this.router.navigate(['/setup']);
  }
}