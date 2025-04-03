//app.routes 
import { Routes } from '@angular/router'; 
import { AdminComponent } from './admin/admin.component'; 
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { UpdateComponent } from './update/update.component'; 
import { teachersComponent } from './teachers/teachers.component'; 
import { studentsComponent } from './students/students.component'; 
import { subjectsComponent } from './subjects/subjects.component'; 
export const routes: Routes = [ 
  { path: 'teachers', component: teachersComponent }, 
  { path: 'students', component: studentsComponent }, 
  { path: 'subjects', component: subjectsComponent }, 
{ path: 'admin', component: AdminComponent }, 
{ path: 'sidebar', component: SidebarComponent}, 
{ path: 'update/:table/:id', component: UpdateComponent }, 
{ path: '', redirectTo: '/admin', pathMatch: 'full' } 
]; 
