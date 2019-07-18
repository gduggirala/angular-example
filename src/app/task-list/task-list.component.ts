import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks = [];
  constructor(private taskService: TaskService) { }

  completeTask(task: ITask) {
    console.log('Task received is ', task);
    this.taskService.completeTask(task).subscribe((data) => {
      const tempTasks = [];
      this.tasks.forEach((tempTask: ITask, index: number, taskArray: []) => {
        if (tempTask.id !== task.id) {
          tempTasks.push(tempTask);
        } else {
          tempTasks.push(data);
        }
      }); // this.tasks.forEach is closed.
    }); // this.taskService.completeTask is closed.
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

}
