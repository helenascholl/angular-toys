import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Toy } from './toy';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Toy[]> {
    return this.http.get<Toy[]>(this.baseUrl);
  }

  public findById(id: number): Observable<Toy> {
    return this.http.get<Toy>(`${this.baseUrl}/${id}`);
  }

  public buy(id: number): Observable<Toy> {
    return this.http.post<Toy>(`${this.baseUrl}/${id}/buy`, {});
  }

}
