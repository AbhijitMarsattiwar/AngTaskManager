import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskserviceService } from '../service/taskservice.service';
import { ParentTask } from '../model/parentTask';

@Component({
  selector: 'edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  parentArr : ParentTask[] = [];
  editForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router: Router, private taskService:TaskserviceService) { }

  ngOnInit() {
    let taskId = localStorage.getItem("taskId");
    console.log(taskId);
    if(!taskId) {
      alert("Invalid action.")
      this.router.navigate(['']);
      return;
    }
    this.editForm = this.formBuilder.group({
      taskId: [],      
      taskName: ['', Validators.required],
      priority: [],
      parentTask: [],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isEnded:[0]
    });
    
    this.getParentTaskList();

    this.taskService.getTaskById(Number.parseInt(taskId))
      .subscribe( task => {
        task.startDate = task.startDate.substr(0, 10);
        task.endDate = task.endDate.substr(0, 10);
        this.editForm.setValue(task);
        //this.editForm.get('parentTask').setValue = task.parentTask['parentTask'];
        //console.log('parent== '+task.parentTask['parentTask']);
        /* this.editForm.patchValue({
          parentTask: task.parentTask['parentTask']
        }) */
      });
  }

  getParentTaskList(){
    let observable=this.taskService.getParentTasks();
    observable.subscribe((obserTasks:ParentTask[])=>
      this.parentArr=obserTasks       
    )
  }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  formHandler(){
    console.log(this.editForm.value);
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.updateTask(this.editForm.value);
  }

  updateTask(task:Task){
    this.taskService.updateTask(task).subscribe(
        (task)=>{
          console.log('successfully updated'+task)
        },
        (error)=>console.log(error)
    )
  }

  backToViewList(){
    this.router.navigate(['']);
  }

}
