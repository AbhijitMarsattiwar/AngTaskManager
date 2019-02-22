import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'searchByDate'
})
export class DateComparePipe implements PipeTransform {
  
    transform(tasksArr: Task[], fromDate: Date, toDate: Date){
        if (tasksArr && tasksArr.length){
            return tasksArr.filter(task =>{
                if (fromDate && task.startDate < fromDate){
                    return false;
                }
                if (toDate && task.endDate > toDate){
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