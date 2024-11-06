// TodoList component
import { ChangeEvent, useState } from "react";
import { Todo } from "./Todo"; // Todo interface

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

// TodoItemを表示しTodoの更新イベントを等を行う
const TodoItem = ({ todo }: { todo: Todo }) => {
  const [text, setText] = useState(todo.text);
  const [editing, setEditing] = useState(false);

  const toggleTodo = () => {};
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleBlur = () => {};
  const handleStartEdit = () => {
    setEditing(true);
  };

  // 日本語入力をしていない時にEnterを押すとTodoを更新する
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.nativeEvent.isComposing) {
      setEditing(false);
    } else if (event.key === "Escape") {
      setText(todo.text);
      setEditing(false);
    } else {
      return;
    }
  };
  return (
    <div>
      <input type="checkbox" checked={todo.done} />
      {/* Todoの更新: 表示と編集モードを切り替え */}
      {editing ? (
        <input
          value={text}
          onChange={handleTextChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyPress}
        />
      ) : (
        <span onClick={handleStartEdit}>{text}</span>
      )}
    </div>
  );
};
