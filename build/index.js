"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data_1 = require("./data");
const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("My Todo list", sampleTodos);
myTodoCollection.addTodo("자바스크립트 학습하기");
myTodoCollection.addTodo("친구와 저녁식사 약속");
myTodoCollection.addTodo("주말에 영화 보기");
myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => { item.printDetails(); });
