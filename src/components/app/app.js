import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import TodoList from "../app-todolist";
import { Context } from "../context/context";

import "./app.css";

const App = () => {

  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    let t = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(t));
  }, []);

  const addTodo = e => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setTodoTitle("");
    }
  };


  const removeTodo = id => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleTodo = id => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <Context.Provider value={{ removeTodo, toggleTodo }}>
      <Container>
        <header className="header-wrapper">
          <h1>TODO List</h1>
          <Input
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            onKeyPress={addTodo}
            placeholder="todo name"
            name="todo"
          />
        </header>
        <main className="main-wrapper">
          <TodoList todos={todos} />
        </main>
      </Container>
    </Context.Provider>
  );
};

export default App;
