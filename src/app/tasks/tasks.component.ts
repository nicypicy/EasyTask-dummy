import { Component, input, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { AddtaskComponent } from "../addtask/addtask.component";
import { NgIf } from '@angular/common';
import { NewTaskData } from './task/task.model';

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


  
tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'JavaScript Deep Dive',
      summary:
        'Understand the core concepts of JavaScript and master modern JavaScript features.',
      dueDate: '2025-11-15',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Build a Responsive Website',
      summary:
        'Create a fully responsive website using HTML, CSS, and Bootstrap with a focus on best practices.',
      dueDate: '2025-10-01',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Learn TypeScript',
      summary:
        'A comprehensive guide to TypeScript for JavaScript developers looking to enhance their skill set.',
      dueDate: '2026-01-10',
    },
    {
      id: 't7',
      userId: 'u6',
      title: 'Master Data Structures & Algorithms',
      summary:
        'Learn essential data structures and algorithms for technical interviews and problem-solving.',
      dueDate: '2025-09-30',
    },
    {
      id: 't8',
      userId: 'u6',
      title: 'Optimize SQL Queries',
      summary:
        'Enhance the performance of database operations by learning how to write optimized SQL queries.',
      dueDate: '2025-12-01',
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(id : string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  isDataVisible = false;

  onStartaddTask() {
    this.isDataVisible = true;
  }

  onCancelAddTask() {
    this.isDataVisible = false;
  }

  onAddTask(taskData : NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date


    })
    this.isDataVisible = false;
  }

  
}
