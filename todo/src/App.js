import React, {useState, useReducer} from 'react';
import {reducer, initialState} from './reducers/reducer'
import List from './components/List'
import Form from './components/Form'




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubit = (e) => {
    e.preventDefault();
    setTodo('');
    dispatch({type: 'NEW_TODO', payload: todo})
  }

  const toggleCompleted = (id) => {
    dispatch({type: 'TOGGLE_COMPLETED',
    payload: id})
  }

  const clear = () => {
    dispatch({type: 'CLEAR'})
  }

  return (
    <div className="App">
     <List completed={toggleCompleted} dispatch={dispatch} state={state}/>
     <Form />
    </div>
  );
}

export default App;
