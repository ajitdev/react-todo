import React from 'react'

const TodoItem = (props) => {
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
        checked={props.data.completed}
      />
      <p
        style={{
          paddingLeft: 30
        }}
      >
        {props.data.text}
      </p>
    </div>
  )
}

export default TodoItem
