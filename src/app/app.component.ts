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

  addTodo($event: HTMLInputElement) {
    this.todos.push($event.value);
    $event.value = '';
  }
}
