import { Action } from "./actions"

export interface todoState {
  todos: {todo: string, id: string}[]
}

const initialState = {
  todos : [] = []
}

export const todoReducer = (state:todoState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_TODO": {
      //adding a todo with id

      //generating a new id
      let id = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for ( var i = 0; i < 4; i++ ) 
          id += characters.charAt(Math.floor(Math.random() * charactersLength));

      const newTodo = {todo:action.payload,id:id}
      
      return {
        ...state, todos: [...state.todos, newTodo]
      }
    }
    case "DELETE_TODO": {
      const todos = state.todos.filter(todo=>todo.id!==action.payload)
      console.log(todos)
      return {
        //delete todo by id
        ...state, todos: todos
      }
    }
    default:
      return state
  }
}