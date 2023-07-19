import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'to-do-list';
  tasks: any ={pending:[],completed:[],deleted:[]}
  addTask(task: string) {
    this.tasks.pending.push(task);
  }
  
  completeTask(completedTask:string) {
    if (this.tasks.pending.includes(completedTask)) {
      this.tasks.completed.push(completedTask);
      this.tasks.pending = this.tasks.pending.filter((tData:string)=>tData !=completedTask)  
    }
  }
  deleteTask(deletedTask:string) {
    if (this.tasks.pending.includes(deletedTask)) {
      this.tasks.deleted.push(deletedTask); 
      this.tasks.pending = this.tasks.pending.filter((tData:string)=>tData !=deletedTask)  

    }
  }
}
