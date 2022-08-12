import React from "react";

const TodoList = ({todos,todo,handleEdit,handleDelete}) =>{
    return(
        <>
        <ul className="alltodo">
          {todos.map((t) => (
            <li className="singletodo">
              <span className="todotext" key={t.id}>{t.todo}</span>
              <button className="id2" onClick={() => handleEdit(t.id)}>Edit</button>
              <button className="id3" onClick={() => handleDelete(t.id)}>Delete</button>
          </li> 
          ))}
        </ul>
        </>
    );
}
export default TodoList;