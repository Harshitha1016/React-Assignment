import React, { useState } from "react";
import "./TaskManager.css";
function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const handleSubmit = () => {
    if (!input.trim()) return;
    if (editId) {
      setTasks(
        tasks.map((task) =>
          task.id === editId
            ? { ...task, text: input }
            : task
        )
      );
      setEditId(null);
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: input,
          completed: false,
        },
      ]);
    }
    setInput("");
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const editTask = (task) => {
    setInput(task.text);
    setEditId(task.id);
  };
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };
  return (
    <div className="container">
      <div className="todo-box">
        <h1> My Tasks</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSubmit}>
            {editId ? "Update" : "Add"}
          </button>
        </div>
        <div className="task-list">
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <p className={task.completed ? "completed" : ""}>
                {task.text}
              </p>
              <div className="buttons">
                <button onClick={() => toggleComplete(task.id)}>
                  Completed
                </button>
                <button onClick={() => editTask(task)}>
                  Edit
                </button>
                <button onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TaskManager;