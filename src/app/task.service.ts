import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from './Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [];
  constructor(private http: HttpClient) { }
  private getUrl = 'http://localhost:8080/api/task/list';
  private createUrl = 'http://localhost:8080/api/task';

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.getUrl);
  }

  addTask(task: any): Observable<ITask> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<ITask>(this.createUrl, task, httpOptions);
  }
}
