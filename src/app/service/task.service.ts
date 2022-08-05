import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  ITask,
  ITaskTypeOption,
  ITypePercentage,
} from 'src/app/models/task.interface';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpclient: HttpClient) {}

  getTaskList(): any {
    
  }
  postTaskList(task: ITask): any {
    
  }

  updateTask(task: ITask, id: string): any {
   
  }
  deleteTask(id: string) {

  }

  getTaskById(id: string): any {
    
  }

  getTypePercentage(): any {
    
  }

  getTypeOptions():any {
  }
}
