import React, { useEffect, useState } from 'react';
import './App.css'
import TodoForm from './Componets/TodoForm';
import TodoList from './Componets/TodoList';

function App() {
  //to get the items from the local storage
  const getLocalItems = () =>{
    let list = localStorage.getItem('todos')
    
    if(list){
      return JSON.parse(localStorage.getItem('todos'));
    }
    else{
      return [];
    }
  }
  const[todo,setTodo]=useState("");
  const[todos,setTodos]=useState(getLocalItems());
  const[editId,setEditId]=useState(0);

  //To handle the Add function
  const handleSubmit = (e) => {
    e.preventDefault();

    //To handle the edit function
    if(editId)
    {
      const edittodo=todos.find((i) => i.id === editId);
      const updatedtodos=todos.map((t)=>
      t.id===edittodo.id
      ?(t={id:t.id,todo}):({id:t.id,todo:t.todo})
      )
      setTodos(updatedtodos);
      setEditId(0);
      setTodo("");
      return;
    };
    if(todo!==""){
      setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
    }
    setTodo("");
  };

  //To handle the delete function
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) =>{
    const edittodo = todos.find((i) => i.id === id);
    setTodo(edittodo.todo);
    setEditId(id);
  }

  //to handle the local storage
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);


  return (
    <div className="App">
      <div className="container">
        <h1>TODO LIST APP</h1>
        <TodoForm
        handleSubmit={handleSubmit}
        todo={todo}
        setTodo={setTodo}
        editId={editId}
        />
        <TodoList
        todos={todos}
        todo={todo}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
     </div>
    </div>
  );
}

export default App;
