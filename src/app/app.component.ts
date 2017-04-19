import {Component} from '@angular/core';

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

  addTodo($event: HTMLInputElement) {
    if ($event.value) {
      this.todos = [...this.todos, {value: this.todo, done: false}];
      // this.todos.push({value: this.todo, done: false});
    }
    this.todo = '';
  }

  todoChange(value) {
    this.todo = value;
  }

  clearCompleted($event) {
    console.log('clearCompleted ', $event);
    this.todos = $event;
  }
}
