import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:44387'; 

  constructor(private http: HttpClient) {}

  getDeltakere(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getDeltaker(id:number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addDeltaker(deltaker: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, deltaker);
  }

  updateDeltaker(id: number, deltaker: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, deltaker);
  }

  deleteDeltaker(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }



  
}

