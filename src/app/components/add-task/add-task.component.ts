import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, FormControl, NgForm } from '@angular/forms';

import { Task } from '../../Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text:string = "";
  date:string = "";
  reminder:boolean = false;
  @Output() onSubmitForm:EventEmitter<Task> = new EventEmitter;

  constructor() { }

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
