import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private _todos: any[];
  switchT: string;
  @Output() clearCompleted = new EventEmitter();
  @Output() switchFilterType = new EventEmitter();
  @Input()
  set footerTodos(value) {
    console.log(value);
    this._todos = value;
    // if (this.footerTodos.length > 5) {
    //   this.tooMany = true;
    // } else {
    //   this.tooMany = false;
    // }
    this.tooMany = this.footerTodos.length > 5 ? true : false;
  }

  get footerTodos() {
    return this._todos;
  }

  tooMany = false;
  constructor() {}

  ngOnInit() {
    console.log(this.footerTodos);
  }

  clearCompletedfromFooter() {
    console.log('clicked clear completed');
    this.footerTodos = this.footerTodos.filter(item => !item.done);
    this.clearCompleted.emit(this.footerTodos);
  }

  switchType(value) {
    this.switchT = value;
    this.switchFilterType.emit(value);
  }

  // ngOnChanges() {
  //   if (this.footerTodos.length > 5) {
  //     this.tooMany = true;
  //   } else {
  //     this.tooMany = false;
  //   }
  // }
}
