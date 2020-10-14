export type Action = { type: string; payload: string };

export const addTodo = (todo: string): Action => ({
  type: "ADD_TODO",
  payload: todo,
});


export const deleteTodo = (id: string): Action => ({
  type: "DELETE_TODO",
  payload: id,
});
