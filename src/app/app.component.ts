import {Component} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?!';
  col = 3;
  todos: any[] = [];
  todo: any;
  filterType = 'all';
  isSelectAll = false;
  editMode = -1;

  constructor(private _http: Http, private _dataService: DataService) {
    this._dataService.getTodos().subscribe(rsp => {
      this.todos = rsp.json();
      this._dataService.todos = this.todos;
      this.checkToggle(true);
    });
    this.todo = localStorage.getItem('tempTodo');
  }

  addTodo($event: HTMLInputElement) {
    if ($event.value) {
      this.todos = [...this.todos, {value: this.todo, done: false}];
      this._dataService.todos = this.todos;
    }
    this.todo = '';
  }

  todoChange(value) {
    this.todo = value;
    localStorage.setItem('tempTodo', value);
  }

  clearCompleted($event) {
    console.log('clearCompleted ', $event);
    this.todos = $event;
    this._dataService.todos = this.todos;
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
    this._dataService.todos = this.todos;
  }

  checkToggle(firstTime?: boolean) {
    console.log('checkToggle');
    const length =
        this.todos.filter(item => item.done === this.isSelectAll).length;
    this.isSelectAll = length > 0 ? false : true;
    this.todos = [...this.todos];
    if (!firstTime) {
      this._dataService.todos = this.todos;
    }
  }

  removeItem(item) {
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
    this.todos = [...this.todos];
    this._dataService.todos = this.todos;
  }

  saveItem(target: HTMLInputElement, item) {
    const index = this.todos.indexOf(item);
    this.todos[index].value = target.value;
    this._dataService.todos = this.todos;
    this.editMode = -1;
  }
}
