import React, { useState, useReducer } from 'react';



const initialState = {
    title: "ToDo List",
    editingTitle: false,
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'clean room!',
            completed: false,
            id: 3892987689
        }
    ]
}

export const reducer = (state, action) => {

};



