import React from 'react'

class TodoItem extends React.Component {
  render() {
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
          checked={this.props.data.completed}
          onChange={() => this.props.handleChange(this.props.data.id)}
        />
        <p
          style={{
            paddingLeft: 30
          }}
        >
          {this.props.data.text}
        </p>
      </div>
    )
  }
}

export default TodoItem
