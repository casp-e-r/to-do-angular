import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todos:any = [];  
  task: any = ''
  addTask() { 
    this.todos = [...this.todos,this.task]; 
  } 
  
}
