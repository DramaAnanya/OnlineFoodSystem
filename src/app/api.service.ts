import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get('https://foodordersystem.glitch.me/api/foods');
  }
}
