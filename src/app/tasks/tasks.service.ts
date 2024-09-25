import { take } from "rxjs"
import {type NewTaskData } from "./task/task.model"
import { Inject, Injectable } from "@angular/core"

@Injectable({providedIn: "root"})

export class TasksService {
   private tasks = [
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

      getUserTasks(userId : string){
        return this.tasks.filter((task)=> task.userId === userId)
      }
    addTask(taskData : NewTaskData, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })
    }
    removeTask(id:string){
        this.tasks = this.tasks.filter((task)=> task.id !== id)
    }
}