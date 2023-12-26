import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [alltasks, setAlltasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlltasks([...alltasks, { task: task, done: false }]);
    setTask("");
  };
  const handleChecked = (e) => {
    
  }
  return (
    <div className="container">
      <div className="todo-app">
        <div className="app-title">
          <h2>To-do app</h2>
          <i className="fa-solid fa-book-bookmark"></i>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="add your tasks"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <button>Add</button>
          </div>
        </form>
        <ul id="list-container">
          {alltasks.map((el, idx) => (
            <li className={el.done === true ? "checked" : ""}>
              <p
                onClick={() => {
                    const checkedlist = [...alltasks];
                    checkedlist[idx].done = !checkedlist[idx].done;
                    return setAlltasks(checkedlist);
                  
                }}
              >
                {el.task}
              </p>

              <span
                onClick={() => {
                  const deleted = alltasks.filter(
                    (ele) => alltasks.indexOf(ele) !== idx
                  );
                  console.log(deleted);
                  return setAlltasks(deleted);
                }}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
