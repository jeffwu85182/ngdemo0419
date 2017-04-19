import {Component} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?!';
  col = 3;
  todos:any[] = [];
  // private _todos = [];
  // set todos(value) {
  //   this._todos = value;
  //   this.updateTodos();
  // };
  // get todos() {
  //   return this._todos;
  // }
  todo: any;
  filterType = 'all';
  isSelectAll = false;
  requestOptions: RequestOptions = new RequestOptions({
    headers: new Headers(
        {'Authorization': 'token 918ba598-d1e6-4810-9a2b-d9c502d5867c'})
  });

  constructor(private _http: Http) {
    this._http.get('./me/demo0419', this.requestOptions).subscribe(rsp => {
      this.todos = rsp.json();
      this.checkToggle();
    });
  }

  updateTodos() {
    this._http.post('./me/demo0419', this.todos, this.requestOptions)
        .subscribe(rsp => console.log('更新完成！ ', rsp.json()));
  }

  addTodo($event: HTMLInputElement) {
    if ($event.value) {
      this.todos = [...this.todos, {value: this.todo, done: false}];
      // this.todos.push({value: this.todo, done: false});
      this.updateTodos();
    }
    this.todo = '';
  }

  todoChange(value) {
    this.todo = value;
  }

  clearCompleted($event) {
    console.log('clearCompleted ', $event);
    this.todos = $event;
    this.updateTodos();
  }

  switchType(ft: string) {
    this.filterType = ft;
  }

  toggleAll() {
    if (this.isSelectAll) {
      this.todos.forEach(item => {
        item.done = true;
      });
    } else {
      this.todos.forEach(item => {
        item.done = false;
      });
    }
    this.updateTodos();
  }

  checkToggle() {
    console.log('checkToggle');
    const length =
        this.todos.filter(item => item.done === this.isSelectAll).length;
    // if (length > 0) {
    //   this.isSelectAll = false;
    // } else {
    //   this.isSelectAll = true;
    // }
    this.isSelectAll = length > 0 ? false : true;
    this.todos = [...this.todos];
    this.updateTodos();
  }

  removeItem(item) {
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
    this.todos = [...this.todos];
    this.updateTodos();
  }
}
