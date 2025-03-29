import { Routes } from '@angular/router';
import { StartComponent } from "./start/start.component";
import { HomeComponent } from "./home/home.component";
import { SetupComponent } from './setup/setup.component';
export const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'home', component: HomeComponent},
  { path: 'setup', component: SetupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];