import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { TaskserviceService } from '../service/taskservice.service';
import { Task } from '../model/task';
import { ParentTask } from '../model/parentTask';

@Component({
  selector: 'addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  addTaskForm:FormGroup;
  parentArr : ParentTask[] = [];
  submitted = false;
  
  constructor(private taskService:TaskserviceService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('init called..');
    this.getParentTaskList();
    this.addTaskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      priority: [10],
      parentTask: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isEnded:[0]
  });
  }

  get parentTask(): string {
    return this.addTaskForm ? this.addTaskForm.get('parentTask').value : '';
  }

  // convenience getter for easy access to form fields
  get f() { return this.addTaskForm.controls; }

  formHandler(){
    console.log(this.addTaskForm.value);
    this.submitted = true;
    if (this.addTaskForm.invalid) {
      return;
    }
    this.saveTask(this.addTaskForm.value);
  }

  saveTask(task:Task){
    this.taskService.saveTask(task).subscribe(
        (task)=>{
          console.log('successfull'+task)
          alert('Task saved successfully')
        },
        (error)=>alert('Error Occured while saving, please contact admin.')
    )
  }

  resetHandler(){
    this.addTaskForm.reset();
    this.getParentTaskList();
  }

  getParentTaskList(){
    let observable=this.taskService.getParentTasks();
    observable.subscribe((obserTasks:ParentTask[])=>
      this.parentArr=obserTasks       
    )
  }
  

}
