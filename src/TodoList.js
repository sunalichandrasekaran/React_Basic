import React,{useState} from "react";

const TodoList = () => {

    const [todos,setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, {text: newTodo.trim(), checked: false}]);
            setNewTodo("");
        }
    }

    const handleDeleteTodo = (index) => {
        const newTodo = [...todos];
        newTodo.splice(index,1);
        setTodos(newTodo)
    }

    const handleToggleTodo = (index) => {
        const newTodo =[...todos];
        newTodo[index].checked = !newTodo[index].checked;
        setTodos(newTodo);
    };


    return (
        <div>
            <h1>To-Do-List</h1>
            <input
            type="text" value={newTodo} onChange = {(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo ,index) => (
                   <li 
                   key={index} 
                   style={{
                    display: "flex",
                   }}
                   >
                   <div style={{display: "flex", alignItems: "center"}}>
                    <input 
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() =>handleToggleTodo(index)}
                      />
                      <span
                        style={{
                            marginRight: "10px",
                            textDecoration: todo.checked ? "line-through" :"none",
                        }}
                        >
                          {todo.text}  
                      </span>
                    </div> 
                    <button
                      style={{marginTop: "5px" , marginBottom: "5px"}}
                      onClick={() => handleDeleteTodo(index)}
                    >
                      Delete  
                    </button>

                   </li>

                ))}
            </ul>
        </div>
    );
};

export default TodoList;
