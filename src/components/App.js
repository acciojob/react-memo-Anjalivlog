import React, { useState } from 'react'
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, 'New Todo']);
  }
  return (
    <div>
      <h1>React.useMemo</h1>
      <div>
        <h2>My todos</h2>
        <button onClick={addTodo}>Add Todo</button>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <hr/>
        <div>
          <span className='heading'>Count: {count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
      <UseMemo/>
      <hr/>
      <hr/>
      <ReactMemo/>
    </div>
  )
}

export default App

