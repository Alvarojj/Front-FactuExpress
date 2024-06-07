import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080';

  getInfoUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuario/0`)
  }
}
