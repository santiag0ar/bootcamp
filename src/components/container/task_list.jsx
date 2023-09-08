import React, { useState } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

function TaskListComponent(props) {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );
  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);

  // Control del ciclo de vida
  useEffect(() => {
    console.log("Task state has been modified");
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [task]);
  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* TODO: Aplicar un for/map para renderizar una lista
    <TaskComponent/>> */}
      <TaskComponent task={defaultTask} />
    </div>
  );
}

export default TaskListComponent;
