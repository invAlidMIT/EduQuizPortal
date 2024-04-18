import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public display() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quiz/`,{headers});
  }

  public addQuiz(quiz: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${baseUrl}/quiz/`, quiz,{headers});
  }

  public deleteQuiz(qid: any) {
  
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${baseUrl}/quiz/${qid}`, { headers });
  }

  public getQuiz(qid: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quiz/${qid}`, {headers});
  }

  public updateQuiz(qid:any,quiz:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${baseUrl}/quiz/${qid}`,quiz,{headers});
  }

  public getQuizzesOfCategory(cid:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quiz/category/${cid}`,{headers});
  }

  public getActiveQuizzes(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quiz/active`,{headers});
  }

  public getActiveQuizzesOfCategory(cid:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quiz/category/active/${cid}`,{headers});
  }
}
