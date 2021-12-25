import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { TASKS } from '../mock-stacks';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'; 

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
   
    return this.http.get<Task[]>(this.apiUrl);
  }

}
