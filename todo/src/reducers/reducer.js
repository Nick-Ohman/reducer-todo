import React, { useState, useReducer } from 'react';



export const initialState = {
    todos:[
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn about other things!!!',
            completed: false,
            id: 3892983443
        }
    ]
}


export const reducer = (state, action) => {
    switch (action.type) {
        case 'NEW_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed:false,
                        id: Date.now()
                    }
                ]
            }
        case 'TOGGLE_COMPLETED':
            return{
                ...state,
                todos: state.todos.map((todo)=> {
                    if(todo.id === action.payload) {
                        return {...todo,completed: !todo.completed};
                    } else {
                        return todo;
                    }
                })
            }
            
            default:
                return state;
    }


};



