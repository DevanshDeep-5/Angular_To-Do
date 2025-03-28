import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-items',
  imports: [NgClass],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css',
})
export class TodoItemsComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('clicked');
  }

  onCheckboxClick(todo: Todo): void {
    this.todoCheckbox.emit(todo);
  }
}
