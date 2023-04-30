import { v4 as uuidv4 } from "uuid"; //使用uuid区分todo项目
import { writable } from "svelte/store"; //store允许我们同时读写项目
import { browser } from "$app/environment"; //检查是否运行在客户端内，因为需要使用window

// 检查是否在浏览器内
// 使用window对象中的localStorage
// 检查一个唯一的项
// 如果不存在，创建一个新数组
const data = browser
    ? JSON.parse(window.localStorage.getItem("st-todo-list")) ?? []
    : [];

//用writable定义一个可以读写的对象data
export const todos = writable(data);

// 使用subscribe，使内存值变动与本地存储同步
// 当用户关闭页面后，可以重新访问
// 传入存储的对象需要使用stringify字符串化
todos.subscribe((value) => {
    if (browser) {
        localStorage.setItem("st-todo-list", JSON.stringify(value));
    }
});

// function addTodo
export const addTodo = () => {
    todos.update((currentTodos) => {
        // 返回创建的todo JSON
        return [...currentTodos, { id: uuidv4(), text: "", complete: false }];
    });
};

// function deleteTodo
export const deleteTodo = (id) => {
    todos.update((currentTodos) => {
        return currentTodos.filter((todo) => todo.id != id);
    });
};

// function toogleTodo
export const toggleComplete = (id) => {
    todos.update((currentTodos) => {
        return currentTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        });
    });
};

// function editTodo
export const editTodo = (id, text) => {
    todos.update((currentTodos) => {
        return currentTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text };
            }
            return todo;
        });
    });
};
