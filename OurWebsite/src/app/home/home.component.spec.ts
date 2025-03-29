import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgClass, NavbarComponent], // Importing NgClass
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
onGetStarted: any;
}
