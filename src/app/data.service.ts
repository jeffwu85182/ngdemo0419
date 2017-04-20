import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class DataService {
  private _firstTime = true;
  private _todos: any[] = [];
  set todos(value) {
    this._todos = value;
    if (!this._firstTime) {
      this.updateTodos();
    } else {
      this._firstTime = !this._firstTime;
    }
  }
  get todos() {
    return this._todos;
  }
  requestOptions: RequestOptions = new RequestOptions({
    headers: new Headers(
        {'Authorization': 'token 9262c50a-9fc4-4b36-9dca-47cf5a8a3338'})
  });
  constructor(private _http: Http) {}

  getTodos() {
    return this._http.get('./me/demo0419', this.requestOptions);
  }

  updateTodos() {
    this._http.post('./me/demo0419', this.todos, this.requestOptions)
        .subscribe(rsp => console.log('更新完成！ ', rsp.json()));
  }
}
