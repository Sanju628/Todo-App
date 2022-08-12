import React from "react"

const TodoForm = ({handleSubmit,todo,setTodo,editId}) => {
    return(
        <>
            <form className="todoForm" onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)} 
                placeholder="Enter the task"/>
                <button className="id1" type="submit">{editId?"Edit":"AddTask"}</button>
            </form>
        </>
    );
}
export default TodoForm;