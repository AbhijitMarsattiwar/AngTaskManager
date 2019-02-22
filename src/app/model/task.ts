import { ParentTask } from "./parentTask";

export class Task{

    taskId:number;
    taskName:string;
    startDate:Date;
    endDate:Date;
    priority:number;
    isEnded:number;
    parentTask: ParentTask;

    constructor(taskId:number,taskName:string,startDate:Date,
        endDate:Date,priority:number,isEnded:number,parentTask: ParentTask){
        this.taskId=taskId;
        this.taskName=taskName;
        this.startDate=startDate;
        this.endDate=endDate;
        this.priority=priority;
        this.isEnded=isEnded;
        this.parentTask= parentTask;
    }  

    get parentName() { 
        //return this.parentTask.parentTask; 
        return this.parentTask ? this.parentTask.parentTask : '';
    }
}