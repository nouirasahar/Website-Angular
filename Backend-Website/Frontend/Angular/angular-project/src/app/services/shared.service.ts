import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
@Injectable({ 
   providedIn: 'root' 
}  
) 
export class SharedService { 
 getItemById(table: string, id: string) { 
  return this.http.get(`${this.apiUrl}/${table}/${id}`); 
 } 
 updateTableData(table: string, item: any) { 
  return this.http.put(`${this.apiUrl}/update/${table}/${item._id}`, item, { 
   headers: { 'Content-Type': 'application/json' }  //  Ensure JSON content type 
}); 
 } 
 getTableData(table: string): Observable<any[]> { // Doit retourner un Observable 
  return this.http.get<any[]>(`${this.apiUrl}/getall/${table}`); 
}  
 private apiUrl = 'http://localhost:3000/api'; 
 constructor(private http: HttpClient) { } 
 getUsers() { 
  return this.http.get(`${this.apiUrl}/getall`); 
 }
deleteItem(table: string, id: string): Observable<any> { 
  return this.http.delete(`${this.apiUrl}/delete/${table}/${id}`); 
}  
deleteTable(table: string): Observable<any> { 
  return this.http.delete(`${this.apiUrl}/delete/${table}`); 
}  
} 
