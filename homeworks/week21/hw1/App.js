/* eslint-disable */
import {useState, useRef} from 'react'
import './App.css';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const Wrapper = styled.div`
  text-align: center;
`

function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: '吃便當', isDone: true},
    {id: 2, content: '打籃球', isDone: false}
  ])
  const [value, setValue] = useState('')
  const [filter, setFilter] = useState('all')
  const id = useRef(3)

  const handleButtonClick = () => {
    setTodos(
      [{
      id: id.current,
      content: value
      }, ...todos]
    )
    setValue('')
    id.current++
  }

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleInputChange = e => {
    setValue(e.target.value)
  }

  const handleEnterInput = e => {
    if(!e.target.value) return
    if(e.key === 'Enter') {
      handleButtonClick()
    }
  }

  const handleToggleClick = id => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }

  const getAll = () => {
    setFilter('all')
  }

  const getUnfinished = () => {
    setFilter('undone')
  }

  const getFinished = () => {
    setFilter('done')
  }

  const cleanAll = () => {
    setTodos([])
  }

  return (
    <Wrapper>
      <div>Todo List</div>
      <input 
        value={value}
        type="text"
        placeholder="add todo"
        onChange={handleInputChange}
        onKeyDown={handleEnterInput}
      />
      <button onClick={handleButtonClick}>
        Add Todo
      </button>
      <div>
        <button onClick={getAll}>All</button>
        <button onClick={getUnfinished}>In progress</button>
        <button onClick={getFinished}>Done</button>
        <button onClick={cleanAll}>Clean All</button>
      </div>
      {
        todos
          .filter(todo => {
            if (filter === "done") return todo.isDone
            if (filter === "undone") return !todo.isDone
            return todo
          })
          .map((todo) => 
            <TodoItem 
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}  
              handleToggleClick={handleToggleClick}
            />)
      }
    </Wrapper>
  );
}

export default App;
