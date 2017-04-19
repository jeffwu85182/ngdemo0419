import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class DataService {
  private _todos: any[] = [];
  set todos(value) {
    this._todos = value;
    this.updateTodos();
  }
  get todos() {
    return this._todos;
  }
  requestOptions: RequestOptions = new RequestOptions({
    headers: new Headers(
        {'Authorization': 'token 918ba598-d1e6-4810-9a2b-d9c502d5867c'})
  });
  constructor(private _http: Http) {}

  getTodos() {
    return this._http.get('./me/demo0419', this.requestOptions)
  }

  updateTodos() {
    this._http.post('./me/demo0419', this.todos, this.requestOptions)
        .subscribe(rsp => console.log('更新完成！ ', rsp.json()));
  }
}
