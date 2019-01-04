import React from 'react'
import TodoItem from './components/todo-item'
import todosData from './data/todosData'

class App extends React.Component {
  render() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} data={item} />)
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
        {/* Render array of components directly */}
        {todoItems}
      </div>
    )
  }
}

export default App