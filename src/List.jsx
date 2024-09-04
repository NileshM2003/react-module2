import { useState } from "react";
import './App.css';
function List() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addTask() {
    if (input === "") {
      alert('Please add data');
    } else {
      setTasks([...tasks, input]);
      setInput("");
    }
  }

  function handleDelete(id) {
    const updatedTasks = tasks.filter((_, index) => index !== id);
    setTasks(updatedTasks);
  }

  function handleEdit(index) {
    setEditingIndex(index);
    setInput(tasks[index]);
  }

  function saveEdit() {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = input;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setInput("");
  }
  function deleteLiist(){
    setTasks([])
    
  }
  return (
    <div className="container">
      <h1>Grocery Shopping</h1>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={editingIndex !== null ? saveEdit : addTask}>
        {editingIndex !== null ? "submit" : "Add"}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={()=>deleteLiist()}>Delete</button>
    </div>
  );
}

export default List;
