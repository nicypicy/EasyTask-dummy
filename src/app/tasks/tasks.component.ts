import { Component, input, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { AddtaskComponent } from "../addtask/addtask.component";
import { NgIf } from '@angular/common';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddtaskComponent, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  
@Input({required: true}) name!:string;
@Input({required: true}) userId!:string;
isDataVisible = false;


constructor(private tasksService : TasksService){
//doing like this automatically creates property for taskservice
}


  

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id : string){
    
  }

  

  onStartaddTask() {
    this.isDataVisible = true;
  }

  onCloseAddTask() {
    this.isDataVisible = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isDataVisible = false;
  }
}
