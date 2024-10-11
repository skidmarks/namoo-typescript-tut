import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";
import { data } from "./data";

const sampleTodos : TodoItem [] = data.map(
    (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo list", sampleTodos);

myTodoCollection.addTodo("자바스크립트 학습하기");
myTodoCollection.addTodo("친구와 저녁식사 약속");
myTodoCollection.addTodo("주말에 영화 보기");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => { item.printDetails()});