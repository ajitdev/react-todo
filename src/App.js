import React from 'react'
import TodoItem from './components/todo-item'
import todosData from './data/todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = { todosData }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    const newData = this.state.todosData.map(item => {
      let completed = item.completed
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    this.setState( {todosData: newData} );
  }

  render() {
    const todoItems = this.state.todosData.map(item => <TodoItem handleChange={this.handleChange} key={item.id} data={item} />)
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