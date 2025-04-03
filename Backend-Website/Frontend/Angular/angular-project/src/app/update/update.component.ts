import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { SharedService } from '../services/shared.service'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
@Component({ 
 selector: 'app-update', 
 standalone: true, 
 imports: [CommonModule, FormsModule], 
 templateUrl: './update.component.html', 
 styleUrls: ['./update.component.scss'] 
}) 
export class UpdateComponent implements OnInit { 
 table: string = '';   
 itemId: string = ''; // ID of the item 
 itemData: any = {};  // Data of the item 
constructor(private route: ActivatedRoute, private service: SharedService, private router: Router) {} 
ngOnInit(): void { 
   this.table = this.route.snapshot.paramMap.get('table') || ''; 
   this.itemId = this.route.snapshot.paramMap.get('id') || ''; 
   if (this.table && this.itemId) { 
    this.service.getItemById(this.table, this.itemId).subscribe({ 
       next: (data: any) => { 
       console.log(`Fetched ${this.table} Data:`, data); 
       if (data) { 
           this.itemData = { ...data }; 
       } else {  
           console.warn(`No data found for ${this.table} with ID ${this.itemId}`); 
           alert(`Error: No data found!`); 
       } 
       }, 
       error: (err) => { 
        console.error(`Error fetching ${this.table} data (Table: ${this.table}, ID: ${this.itemId})`, err); 
       alert(`An error occurred while fetching ${this.table} data.`); 
       } 
    }); 
   } 
} 
updateItem(): void { 
 this.service.updateTableData(this.table, this.itemData).subscribe({ 
   next: () => { 
    alert(`${this.table} updated successfully!`); 
    this.router.navigate([`/${this.table}`]); // Redirection 
   },  
   error: (error) => { 
    console.error(`Error updating ${this.table}:`, error); 
    alert(`An error occurred while updating ${this.table}.`); 
   } 
}); 
} 
 // Helper function to dynamically list fields 
 objectKeys(obj: any): string[] { 
  return obj ? Object.keys(obj) : []; 
 } 
} 
