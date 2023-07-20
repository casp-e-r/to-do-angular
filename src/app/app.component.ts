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
    this.tasks.pending.push({task:task,id:this.tasks.pending.length+1});
  }
  
  completeTask(completedTask:any) {
    if (this.tasks.pending.includes(completedTask)) {
      this.tasks.completed.push(completedTask);
      this.tasks.pending = this.tasks.pending.filter((tData:any)=>tData?.id !=completedTask?.id)  
    }
  }
  deleteTask(deletedTask:any) {
    if (this.tasks.pending.includes(deletedTask)) {
      this.tasks.deleted.push(deletedTask); 
      this.tasks.pending = this.tasks.pending.filter((tData:any)=>tData?.id !=deletedTask?.id)  

    }
  }
}
