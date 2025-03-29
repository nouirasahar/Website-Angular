import { Component } from '@angular/core';

@Component({
  selector: 'app-setup',
  imports: [],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.scss'
})
export class SetupComponent {
  constructor() {
    console.log("SetupComponent loaded! 🚀"); // ⚠️ Vérifie dans la console si ce message apparaît
  }


}