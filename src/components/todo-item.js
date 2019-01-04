import React from 'react'

const TodoItem = () => {
  return (
    <div
      style={{
        borderBottom: '0.1px solid',
        margin: '2px auto',
        alignItems: 'center'
      }}
    >
      <input
        type="checkbox"
        style={{
          float: 'left',
        }}
      />
      <p
        style={{
          paddingLeft: 30
        }}
      >
        Todo 1
      </p>
    </div>
  )
}

export default TodoItem
