import React from 'react'
import TodoItem from './components/todo-item'

function App() {
  return (
    <div
      style={{
        width: '50%',
        height: '100%',
        margin: 'auto',
        padding: '40px',
        backgroundColor: 'whitesmoke',
      }}
    >
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default App