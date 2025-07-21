import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [taskText, setTaskText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      note:""
  
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input type="text" placeholder="Enter your task" value={taskText} onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask} className="add-btn">Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)}/>
            <span>{task.text}</span>
            <button onClick={() => navigate(`/notes/${task.id}`)} className="note-btn">
              View Notes
            </button>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
