import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  public createTask(newTask: any): Observable<any> {
    return this.http.post("http://www.mocky.io/v2/5d1561fb0e00006e00a112bf",newTask);
  }

  public getTask(id: number): Observable<any> {
    return from(Promise.resolve({
      completed: true,
      creationDate: "2019-06-28T23:25:22.278Z",
      description: "1231",
      priority: "1",
      title: "312",
      _id: 1231
    }));
  }
}
