import React from "react";
import TaskForm from "../components/TaskForm";
import { Link } from "react-router-dom";

const AddTask = () => {
  return (
    <div>
      <h1>Adicionar Tarefa</h1>
      <Link to="/">Voltar</Link>
      <TaskForm />
    </div>
  );
};

export default AddTask;
