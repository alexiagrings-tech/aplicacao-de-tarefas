import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, removeTask } = useContext(TaskContext);

  if (tasks.length === 0) return <p>Nenhuma tarefa cadastrada.</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}{" "}
          <button onClick={() => removeTask(task.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
