import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])


  fetch("http://localhost:3006/todos").then(async function(res){
    const json = await res.json();
    setTodos(json.todos)
  })

  return (
    <div>
      <CreateTodo />   
      <Todos
       todos={todos}>
      </Todos>
    </div>
  )
}

export default App
