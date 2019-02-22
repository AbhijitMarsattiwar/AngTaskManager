import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskserviceService } from '../service/taskservice.service';
import { Router } from '@angular/router';

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
      this.tasksArr=obserTasks,
      (error)=> alert('Error Occured while loading, please contact admin and ensure backend services are UP.')
    )
  }

  completeTask(event:Event,task:Task){
    event.preventDefault();
    console.log(task);
    task.isEnded = 1; // 1 for ending.
    this.taskService.updateTask(task).subscribe(
      (task)=>{
        alert('Task Updated Successfully');
      },
      (error)=> alert('Error Occured while saving, please contact admin. Error is'+error)
    )
  }

  editTask(event:Event,task:Task){
    event.preventDefault();
    //this.selectedTask = task;
    //console.log(JSON.stringify(task));
    localStorage.setItem("taskId",task.taskId.toString());
    this.router.navigate(['edit']);
  }
}
