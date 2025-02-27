import React, { useEffect, useState } from "react";

const index = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [selectedItem, setSelectedItem] = useState(null);

  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    time: "",
  });

  const handleAddNewTask = () => {
    if (newTask.name !== "" && newTask.time !== "") {
      setTasks([...tasks, newTask]);
      setNewTask({ name: "", description: "", time: "" });
    } else {
      alert("Invalid Input!");
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChangeValue = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>To Do List</h1>
      <div
        className="to-do-list"
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <input
            type="text"
            name="name"
            value={newTask.name}
            onChange={handleChangeValue}
            placeholder="Add a task"
            style={{ minWidth: "200px", border: "none", borderRadius: "5px" }}
          />

          <input
            type="time"
            name="time"
            value={newTask.time}
            onChange={handleChangeValue}
            placeholder="Add a task"
            style={{
              minWidth: "max-content",
              borderRadius: "5px",
              padding: "10px",
              border: "none",
            }}
          />
        </div>
        <textarea
          name="description"
          onChange={handleChangeValue}
          value={newTask.description}
          placeholder="Add Task's Description:"
          style={{ minWidth: "200px", minHeight: "100px" }}
        />
        <button style={{ width: "max-content" }} onClick={handleAddNewTask}>
          Add
        </button>
      </div>

      <div>
        <h1>Tasks To Do</h1>
        <div
          className="todoitemset"
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          {tasks.length !== 0 &&
            tasks.map((t, i) => (
              <div
                key={i}
                className="tasktodo"
                style={{
                  padding: "5px 10px",
                  backgroundColor: "gray",
                  color: "white",
                  display:"flex",
                  alignItems:"center",
                  gap:"10px",
                  justifyContent:"center"
                }}
              >
                <span>{t.name} : {t.time}</span>
                <button style={{backgroundColor:"green", padding:"5px 10px", fontSize:"16px"}}>Edit</button>
                <button style={{backgroundColor:"red", padding:"5px 10px", fontSize:"16px"}}>Delete</button>
             </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default index;
