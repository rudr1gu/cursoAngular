import { Injectable } from '@angular/core';
import { Pessoa } from '../Pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listUrl = 'http://localhost:3000/pessoas'

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Pessoa[]>(`${this.listUrl}/${id}`)
  }

  getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.listUrl)
  }

  getItem(id: number): Observable<Pessoa> {
    const url = `${this.listUrl}/${id}`
    return this.http.get<Pessoa>(url)
  }
}