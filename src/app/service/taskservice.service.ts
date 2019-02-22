import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from './../model/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor(private httpClient: HttpClient) { }

  getAllTasks():Observable<any>{
    console.log(this.httpClient);
      // rest full webservice client code
    let observables=this.httpClient.get('http://localhost:8080/api/tasks')
    return observables;
  }

  saveTask(task:Task):Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/addTask',task)
  }

  updateTask(task:Task):Observable<any>{
    return this.httpClient.put('http://localhost:8080/api/tasks'+'/'+task.taskId,task)
  }

  getParentTasks():Observable<any>{
    //console.log(this.httpClient);
    let observables=this.httpClient.get('http://localhost:8080/api/parentTasks');
    console.log(observables);
    return observables;
  }

  getTaskById(taskId: number):Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/tasks'+'/'+taskId)
  }
}
