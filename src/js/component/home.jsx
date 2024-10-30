import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);


  const handleChange = event => {
    setInputValue(event.target.value);
  };


  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      handleResetClick();
    }
  };


  const handleResetClick = () => {
    setInputValue(prev => prev = '');
  };


  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-start">
        <h1 className="mb-4">My ToDo List</h1>
        
  
        <div className="input-group mb-3" style={{ maxWidth: "500px" }}>
          <input  
            className="form-control form-control-lg"      
            type="text"
            onChange={handleChange}
            value={inputValue}
            placeholder="Add a new task"
            aria-label="todo list input field"
          />
          <button 
            className="btn btn-primary"
            type="submit"
          >
            Add Task
          </button>
        </div>

     
        {todos.length === 0 ? (
          <p className="text-muted">No tasks, add a task</p>
        ) : (
          <ul className="w-100" style={{ maxWidth: "500px", padding: 0 }}>
            {todos.map((item, index) => (
              <li 
                key={index} 
                className="todo-item p-2 border rounded mb-2"
              >
                <span>{item}</span>
                <button
                  type="button"
                  className="btn btn-link text-danger delete-button p-0"
                  onClick={() => handleDelete(index)}
                  style={{ opacity: 0 }}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="text-muted mt-2">
          {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
        </div>
      </form>
    </div>
  );
};

export default Home;
