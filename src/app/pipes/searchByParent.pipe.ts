import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';
 
@Pipe({ name: 'searchByParent' })
export class SearchByParentPipe implements PipeTransform {
 /** transform(tasksArr: Task[], searchText: string) {
    return tasksArr.filter(task => task.parentName.indexOf(searchText) !== -1);
  } */
  transform(tasksArr: Task[], searchText: string){
    if (tasksArr && tasksArr.length){
        return tasksArr.filter(task =>{
            if (searchText && task.parentTask && task.parentTask.parentTask.toLowerCase().indexOf(searchText.toLowerCase()) === -1){
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