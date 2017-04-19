import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  private _todos: any[];

  @Input()
  set footerTodos(value) {
    console.log(value);
    this._todos = value;
  }

  get footerTodos() {
    return this._todos;
  }

  tooMany = false;
  constructor() {}

  ngOnInit() {
    console.log(this.footerTodos);
  }

  ngOnChanges() {
    if (this.footerTodos.length > 5) {
      this.tooMany = true;
    } else {
      this.tooMany = false;
    }
  }
}
