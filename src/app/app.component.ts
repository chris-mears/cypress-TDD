import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List';
  todoList = [];
  @ViewChild('todoInput') todoInputRef: ElementRef;


  addTodo() {
    const todo = this.todoInputRef.nativeElement.value;
    this.todoList.push(todo);
  }
}
