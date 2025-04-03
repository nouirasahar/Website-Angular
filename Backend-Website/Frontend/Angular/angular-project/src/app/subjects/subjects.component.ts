import { Component, OnInit } from '@angular/core'; 
import { SharedService } from '../services/shared.service'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
@Component({ 
  selector: 'app-subjects', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './subjects.component.html', 
  styleUrls: ['./subjects.component.scss'] 
} 
)  
export class subjectsComponent implements OnInit {  
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
    viewsubjects(subjects: any): void { 
    console.log('View subjects:', subjects); 
    alert(`Viewing subjects: ${JSON.stringify(subjects, null, 2)}`); 
} 
    updatesubjects(subjects: any): void { 
    this.router.navigate(['/update', 'subjects', subjects._id]); 
  } 
    deletesubjects(subjectsId: string): void { 
    console.log('Delete subjects ID:', subjectsId); 
    this.service.deleteItem('subjects',subjectsId).subscribe(  
       response => { 
           console.log('subjects deleted successfully', response); 
           // Mise à jour de l'affichage des données après suppression 
           this.dataMap['subjects'] = this.dataMap['subjects'].filter((subjects: any) => subjects._id !== subjectsId); 
           alert('subjects Deleted!'); 
       }, 
       error => { 
           console.error('Error deleting subjects:', error); 
           alert('Failed to delete subjects!'); 
       }  
    ); 
} 
} 
