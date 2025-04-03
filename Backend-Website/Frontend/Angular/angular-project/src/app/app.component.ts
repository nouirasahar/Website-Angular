import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router'; 
import { AdminComponent } from './admin/admin.component'; 
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { teachersComponent } from './teachers/teachers.component'; 
import { studentsComponent } from './students/students.component'; 
import { subjectsComponent } from './subjects/subjects.component'; 
@Component({ 
    selector: 'app-root', 
    standalone: true, 
    imports:[ 
    teachersComponent, 
    studentsComponent, 
    subjectsComponent, 
    AdminComponent, 
    SidebarComponent, 
    RouterOutlet 
  ], 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss'] 
 }) 
export class AppComponent { 
  title = 'user-test'; 
} 
