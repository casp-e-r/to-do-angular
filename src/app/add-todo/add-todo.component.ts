import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  newTask: string = '';
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim().length === 0) {
      return; 
    }
    this.taskAdded.emit(this.newTask);
    this.newTask = ''; 
  }
}
