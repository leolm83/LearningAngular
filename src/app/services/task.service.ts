import { Injectable } from '@angular/core';
import {Task} from '../interfaces/Task'
import {TASKS} from '../mocked-data/mocked-tasks'
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }
}
