import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public tasks = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  addTask(title: string, content: string) {
    const task = {
      title,
      content,
      isActive: true
    };
    // this.tasks.push(task);
    console.log(`New task added ${title} with description ${content} `);
    this.taskService.addTask(task).subscribe(data => this.tasks.push(data));
  }

}
