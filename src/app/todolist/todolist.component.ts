import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  @Input() tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
  }
}
