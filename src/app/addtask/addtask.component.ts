import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../tasks/task/task.model';
import { Inject } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
@Input({required: true}) userId! : string;
@Output() close = new EventEmitter<void>;
enteredTitle = '';
enteredSummary = '';
enteredDate = '';
private tasksService = inject(TasksService)

onCancel(){
  this.close.emit();

}

onSubmit(){
this.tasksService.addTask({
  title: this.enteredTitle,
  summary: this.enteredSummary,
  date:this.enteredDate
}, this.userId
);
this.close.emit();
}
}
