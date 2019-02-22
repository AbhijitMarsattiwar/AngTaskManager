import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'searchByPriority'
})
export class PriorityPipe implements PipeTransform {
  
    transform(tasksArr: Task[], searchByPriorityFrom: number, searchByPriorityTo: number){
        if (tasksArr && tasksArr.length){
            return tasksArr.filter(task =>{
                if (searchByPriorityFrom && task.priority < searchByPriorityFrom){
                    return false;
                }
                if (searchByPriorityTo && task.priority > searchByPriorityTo){
                    return false;
                }                
                return true;
           })
        }
        else{
            return tasksArr;
        }
    }
}