import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public display() {
    return this.http.get(`${baseUrl}/quiz/`);
  }

  public addQuiz(quiz: any) {
    return this.http.post(`${baseUrl}/quiz/`, quiz);
  }

  public deleteQuiz(qid: any) {
    // Get the JWT token from localStorage
    const token = localStorage.getItem('token');
    
    // Set the request headers with Authorization header containing the JWT token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Include headers in the delete request
    return this.http.delete(`${baseUrl}/quiz/${qid}`, { headers });
  }
}
