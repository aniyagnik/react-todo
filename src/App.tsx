import React from "react";
import { NewTodoInput } from "./NewTodoInput";
import { useSelector, useDispatch } from "react-redux";
import { todoState } from "./todoReducer";
import { addTodo, deleteTodo } from "./actions";

function App() {
  const todos = useSelector<todoState, todoState["todos"]>(
    (state) => state.todos
  );
  const dispatch = useDispatch();

  const onAddTodo = (todo: string) => {
    dispatch(addTodo(todo));
  };

  
  const onDelTodoClick = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h1>TODO-APP</h1>
      <hr/>
      <NewTodoInput addTodo={onAddTodo} />
      <hr/><br/>
      <div>
        {todos.length > 0 ?
          (todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <div className='content'>{todo.todo}</div>
                <button className='delButton' onClick={()=>{onDelTodoClick(todo.id)}}>Delete Todo</button>
              </div>
            );
          })):(<div className='todo'><div className='content'>You don't have any todo...</div></div>)
        }
      </div>
    </>
  );
}

export default App;
