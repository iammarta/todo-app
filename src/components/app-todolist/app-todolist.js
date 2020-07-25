import React from 'react';
import TodoItem from '../app-todo-item';


const TodoList = ({todos}) => {
  return (
     <ul>
         {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </ul>
  );
}

export default TodoList;