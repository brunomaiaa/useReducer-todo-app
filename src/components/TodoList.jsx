
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { deleteTodo } from "../context/TodoReducer";
import Todo from "./Todo";
import {  finishTodo } from "../context/TodoReducer";


export default function TodoList() {
  const {state,dispatch} = useContext(TodoContext);

  const deleteTodoItem = (item) => {
    //delete the action
    console.log("delete todo item", item);
    dispatch(deleteTodo(item.id));
    //above line results in this happening:
    //dispatch({type:"DELETE_TODO", payload:item.id})

  }

  const finishTodoItem = (item) => {
    //finish the action
   
    //we have to make dispatch call here
    dispatch(finishTodo(item.id))
  }


  
  return (
    <>
    <h1>To Do List</h1>
    <div className='todo-container'>
        {state.todos.map((item ) => <Todo key={item.id} item={item} onDeleteClicked={deleteTodoItem}
        onFinishClicked={finishTodoItem} />)}
       
    </div>
    </>
  )
}