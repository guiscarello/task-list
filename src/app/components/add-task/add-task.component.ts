import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text!: string;
  date!: string;
  reminder!: boolean;
  @Output() onSubmitForm:EventEmitter<Task> = new EventEmitter;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe(val => {
        this.showAddTask = val;
      })
  }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const newTask:Task = {
      text: f.value.text,
      date: f.value.date,
      reminder: f.value.reminder
    };
    this.onSubmitForm.emit(newTask);
  }

}
