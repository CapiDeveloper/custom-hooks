import { useReducer,useEffect, useState } from "react";
import { todoReducer } from "../../08-useReducer/todoReducer";

const initialState = [];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer,initialState,init);

    // Acciones para todos

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleNewTodo = (todo)=>{

        // Mandamos a llamar dispatch y enviamos parametros para
        // que realice una accion 
        dispatch({
            type:    '[TODO] Add Todo',
            payload: todo
        });
    }
    
    const handleDeleteTodo = (id)=>{

        // Mandamos a llamar dispatch y enviamos parametros para
        // que realice una accion 
        dispatch({
            type:'[TODO] Remove Todo',
            payload: id
        })
    }

    const onToggleTodo = (id)=>{

        // Mandamos a llamar dispatch y enviamos parametros para
        // que realice una accion 
        dispatch({
            type:'[TODO] Add Toggle',
            payload:id
        });
    }

    return {
    todos,
    todoCount: todos.length,
    pendingTodosCount : todos.filter(todo=>todo.done == false).length,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo
  }
}