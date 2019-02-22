import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskserviceService } from '../service/taskservice.service';
import { Router } from '@angular/router';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  tasksArr:Task[]=[];
  searchByTask = '';
  searchByParent = '';
  searchByPriorityFrom = '';
  searchByPriorityTo = '';
  fromDate = '';
  toDate = '';
  constructor(private taskService:TaskserviceService,private router: Router) { }

  ngOnInit() {
    this.loadAllTasks()
  }

  loadAllTasks(){
    let observable=this.taskService.getAllTasks();
    observable.subscribe((obserTasks:Task[])=>
      this.tasksArr=obserTasks       
    )
  }

  completeTask(event:Event,task:Task){
    event.preventDefault();
    console.log(task);
    task.isEnded = 1; // 1 for ending.
    this.taskService.updateTask(task).subscribe(
      (task)=>{
        console.log('successfull'+task)
      //  this.loadEmployee()
      },
      (error)=>console.log(error)
    )
  }

  editTask(event:Event,task:Task){
    event.preventDefault();
    //this.selectedTask = task;
    //console.log(JSON.stringify(task));
    localStorage.setItem("taskId",task.taskId.toString());
    this.router.navigate(['edit']);
  }


  insertEmployee(){
    this.taskService.saveTask(null).subscribe(
        (employee)=>{
          console.log('succesfulle');
          this.loadAllTasks();
        },
        (error)=>console.log(error),
    )
  }


}
