import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItemsComponent, AddTodoComponent, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const localItem = localStorage.getItem('todos');
      if (localItem == null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(localItem);
      }
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // onCheckboxEvent(event: any): void {
  //   console.log('Received event:', event); // Log the emitted object
  //   // this.toggleTodo(event); // Pass it to toggleTodo
  // }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active 
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
