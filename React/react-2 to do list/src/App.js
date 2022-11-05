import { useState } from 'react';
import './App.css';
import { Container } from "react-bootstrap"
import Add from './components/Add'
import List from './components/List'

// testing

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const dataTodo = { todoName, status: false }
    setTodoList([dataTodo, ...todoList])
    setTodoName("")
  };

  const handleChangeTodoName = (e) => {
    const data = e.target.value
    setTodoName(data)
  }

  const finishTodo = (index) => {
    const cloneTodoList = [...todoList]
    cloneTodoList[index].status = !cloneTodoList[index].status
    setTodoList(cloneTodoList)
  }

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((value, idx) => index !== idx))
  }

  // testing 2124

  return (
    <Container>
      <h1 className="text-center m-5">To Do Web App</h1>
      <Add handleChangeTodoName={handleChangeTodoName} todoName={todoName} addTodo={addTodo} />
      <div className='mt-5'>
        <List todoList={todoList} deleteTodo={deleteTodo} finishTodo={finishTodo} />
      </div>
    </Container>
  );
}

export default App;
