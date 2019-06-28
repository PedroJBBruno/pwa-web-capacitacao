import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
