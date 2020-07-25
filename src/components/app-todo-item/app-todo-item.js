import React, { useContext } from "react";
import Icon from "@material-ui/core/Icon";
import Checkbox from "@material-ui/core/Checkbox";
import { Context } from "../context/context";

import "./app-todo-item.css";

const TodoItem = ({ title, id, completed }) => {
    
  const { removeTodo, toggleTodo } = useContext(Context);

  const cls = "todo-item";

  return (
    <div className="item">
      <li className={completed ? `${cls} completed` : `${cls}`}>
        <Checkbox
          color="primary"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{title}</span>
      </li>
      <Icon className="delete" onClick={() => removeTodo(id)}>
        delete
      </Icon>
    </div>
  );
};

export default TodoItem;
