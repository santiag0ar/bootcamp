import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

// importamos la hoja de estilos task.scss
import "../../styles/task.scss";

function TaskListComponent(props) {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida
  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);
  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  return (
    <div>
      <div>
        <div className="col-12">
          <div className="card">
            {/* Card Header (title) */}
            <div className="card-header p-3">
              <h5>Your Tasks:</h5>
            </div>
          </div>
          {/* Card Body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Iterar sobre una lista de tareas */}
                <TaskComponent task={defaultTask} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* TODO: Aplicar un for/map para renderizar una lista
    <TaskComponent/>> */}
      {/* <TaskComponent task={defaultTask} /> */}
    </div>
  );
}

export default TaskListComponent;
