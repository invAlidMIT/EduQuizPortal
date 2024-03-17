import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public categories(){
    return this.http.get(`${baseUrl}/category/`);
  }

  public addCategory(category: any){
      return this.http.post(`${baseUrl}/category/`,category);
  }

  public deleteCategory(cid:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${baseUrl}/category/${cid}`,{headers});
  }
}
