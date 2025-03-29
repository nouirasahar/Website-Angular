import { Component } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SetupComponent } from './setup/setup.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavbarComponent, SetupComponent, StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ourwebsiiite';

  // Set up routes directly in the component
  routes: Routes = [
    { path: 'start', component: StartComponent },
    { path: 'home', component: HomeComponent },
    { path: 'setup', component: SetupComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];

  constructor(private router: Router) {
    // Directly configure routing here
    this.router.config = this.routes;
  }
}



