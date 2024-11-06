// Todosコンポーネントを作成する
import React, { useState } from "react";
import { sampleTodoList, Todo } from "./Todo";
import { TodoList } from "./TodoList";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(sampleTodoList()); // Todo array
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};
