import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Preloader from './components/Preloader';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const getTodos = async ()=>{
      const res = await axios.get("http://localhost:5001")
      
      setTodos(res.data)
    }
    getTodos()
  },[])

  const createTodo = async (text)=>{
    const res = await axios.post('http://localhost:5001', {message: text})
    setTodos(res.data)
  }

  return (
    <div className="container">
      <Header/>
      <TodoInput createTodo={createTodo}/>
      {todos ? <Todos todos={todos}/> : <Preloader/>}
      
      
    </div>
  );
}

export default App;
