import { Component, OnInit } from '@angular/core';
import { Observable , of} from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import{Task} from '../../interfaces/Task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

}