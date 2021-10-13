/* eslint-disable */
import {useState, useRef} from 'react'
import styled from 'styled-components';

const TodoItemWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;
`

const TodoContent = styled.div`
  color: black;

  ${props => props.isDone && `
    text-decoration: line-through;
  `}
`

const TodoButtonWrapper = styled.div``

const Button = styled.button`
  padding: 4px;

  &:hover {
    color: red;
  }

  & + & {
    margin-left: 4px;
  }
`
const Finished = styled.label`
  text-decoration: line-through
`

export default function TodoItem ({ todo, handleDeleteTodo, handleToggleClick }) {
  const handleToggle = () => {
    handleToggleClick(todo.id)
  }

  const handleDelete = () => {
    handleDeleteTodo(todo.id)
  }

  return (
    <TodoItemWrapper data-todo-id={todo.id}>
      <TodoContent isDone={todo.isDone}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button onClick={handleToggle}>
          { todo.isDone ? <Finished>Done</Finished> : 'Done' }
        </Button>
        <Button onClick={handleDelete} >
          Delete
        </Button>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  )
}