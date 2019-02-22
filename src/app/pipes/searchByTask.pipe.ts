import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';
 
@Pipe({ name: 'searchByTask' })
export class SearchByTaskPipe implements PipeTransform {
  transform(tasksArr: Task[], searchText: string) {
    return tasksArr.filter(teacher => teacher.taskName.indexOf(searchText) !== -1);
  }
}