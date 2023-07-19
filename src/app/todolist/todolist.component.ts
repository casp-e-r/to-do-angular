import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  @Input() tasks: any;
  @Output() taskCompleted = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<string>();

  completeTask(task:string) {
    this.taskCompleted.emit(task); 
  }
  deleteTask(task:string) {
    this.taskDeleted.emit(task);
  }
}
