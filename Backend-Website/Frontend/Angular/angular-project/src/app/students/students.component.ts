import { Component, OnInit } from '@angular/core'; 
import { SharedService } from '../services/shared.service'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
@Component({ 
  selector: 'app-students', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './students.component.html', 
  styleUrls: ['./students.component.scss'] 
} 
)  
export class studentsComponent implements OnInit {  
  tables: string[] = []; 
  dataMap: any = {}; 
  constructor(private service: SharedService, private router: Router) {} 
  ngOnInit(): void { 
      this.service.getUsers().subscribe(data => { 
      console.log("Données reçues:", data ); 
      if (data && typeof data === "object") { 
        this.tables = Object.keys(data); 
        this.dataMap = data; 
        } else { 
          this.tables = [];  
          this.dataMap = {};   
        }  
      }  
      );  
    }  
//get columns for the table dynamically  
    getColumns(table: string): string[] { 
        return this.dataMap[table] && this.dataMap[table].length > 0  
          ? Object.keys(this.dataMap[table][0]) : []; 
    } 
 // Get the values of a row dynamically  
    getValues(row: any): any[] {  
      return Object.values(row);  
  }  
// New Methods for the Buttons 
    viewstudents(students: any): void { 
    console.log('View students:', students); 
    alert(`Viewing students: ${JSON.stringify(students, null, 2)}`); 
} 
    updatestudents(students: any): void { 
    this.router.navigate(['/update', 'students', students._id]); 
  } 
    deletestudents(studentsId: string): void { 
    console.log('Delete students ID:', studentsId); 
    this.service.deleteItem('students',studentsId).subscribe(  
       response => { 
           console.log('students deleted successfully', response); 
           // Mise à jour de l'affichage des données après suppression 
           this.dataMap['students'] = this.dataMap['students'].filter((students: any) => students._id !== studentsId); 
           alert('students Deleted!'); 
       }, 
       error => { 
           console.error('Error deleting students:', error); 
           alert('Failed to delete students!'); 
       }  
    ); 
} 
} 
