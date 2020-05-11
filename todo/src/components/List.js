import React from 'react';


function List (props) {
    return(
<>
    <div>
        {props.state.todos.map((todo) => {
         {todo.item} 
        })}
    </div>
    </>
    )
}

export default List;