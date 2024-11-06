// Todoの型
export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

// Todoを作成する
export const createTodo = (text: string): Todo => ({
  id: crypto.randomUUID(),
  text,
  done: false,
});

// 空のデータを作成する
export const emptyTodo = (): Todo => ({
  id: "",
  text: "",
  done: false,
});

// Todoのサンプルを作成する
export const sampleTodos = [
  {
    id: "1",
    text: "sample todo 1",
    done: false,
  },
  {
    id: "2",
    text: "sample todo 2",
    done: true,
  },
];

// Todoリストを作成する
export const createTodoList = (todos: Todo[]): Todo[] => {
  return todos;
};

// Todoリストのサンプルを作成する
export const sampleTodoList = (): Todo[] => {
  return sampleTodos;
};

// Todoリストを空にする
export const emptyTodoList = (): Todo[] => {
  return [];
};
