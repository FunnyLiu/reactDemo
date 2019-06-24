import React, { useContext, useReducer } from "react";

const todosReducer = (todos, action) => {
  const { type, text, id, checked } = action;

  switch (type) {
    case "add":
      return [
        ...todos,
        {
          text: text,
          completed: false,
          id: +new Date()
        }
      ];
    case "toggle":
      return todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    case "toggle-all":
      return todos.map(todo => ({ ...todo, completed: checked }));
    case "destroy":
      return todos.filter(todo => todo.id !== id);
    case "edit":
      return todos.map(todo =>
        todo.id === id ? { ...todo, text: text } : todo
      );
    case "clear-completed":
      return todos.filter(({ completed }) => !completed);
  }
};

export const TodosContext = React.createContext(null);

/**
 * use TodosContext
 */
export const useTodos = () => {
  const contextValue = useContext(TodosContext);
  return contextValue;
};

export const TodosProvider = props => {
  const { children } = props;
  const contextValue = useReducer(
    todosReducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [todos] = contextValue;

  //When using an imperative API, use useEffect.
  //Triggers when the value of todos changes.
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
