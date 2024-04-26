import { useState } from "react";
import "./Task.css";
function Task() {
  const [task, setTask] = useState([
    "make a discord app",
  ]);
  const [showInput, setShowInput] = useState(false);
  const [newTaks, setNewTask] = useState("");
  const [time , setTIme] = useState(new Date());

  function formatTaskDate(){
    let hour = time.getHours();
    let date = time.getDate();
    let year = time.getFullYear();
    let day = time.getDay();
    let month = time.getMonth();
    return `${year} - ${date} - ${hour} hr `
  }

  function hundleInput(event) {
    setNewTask(event.target.value);
  }
  function toggleTask() {
    setShowInput(!showInput);
  }
  function addTodo() {

    if (newTaks.trim() != "") {
      setTask([...task, newTaks]);
      setNewTask("");
      toggleTask()

    }   
  }
  function deleteTodo(index) {
    const updateTodi = task.filter((val, i) => i != index);
    setTask(updateTodi);
  }
 

  return (
    <>
      {/* heading container */}
      <div className="headingContainer">
        <h1>Write your Today task</h1>
      </div>

      {/* task add container */}
      <div className="taskContainWaper">
        <ul className="wrap">
          {task.map((task, index) => (
            <li className="task" key={index}>
              <p className="t_heading">New task</p>
              <p className="task_des">{task}</p>

              <div className="deletetask">
                <p className="t_date"> {formatTaskDate()} </p>
                <div className="del" onClick={() => deleteTodo(index)}>
                  del
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* task input */}
      <div
        className={
          showInput ? "taskInputContainershow" : "taskInputContainerhide"
        }
      >
        <div className="inputContainer">
          <p className="close" onClick={toggleTask}>
            close
          </p>
          <div className="edit">
            <textarea
              name=""
              cols="30"
              rows="5"
              className="getinput"
              value={newTaks}
              onChange={hundleInput}
            ></textarea>
            <button className="addtask" onClick={addTodo}>
              add task
            </button>
          </div>
        </div>
      </div>
      {/* add new task container */}
      <div className="addnewTaskContainer">
        <div className="newtask" onClick={toggleTask}>
          new task
        </div>
      </div>
    </>
  );
}

export default Task;
