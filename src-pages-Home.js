import React from "react";
import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <Link to="/add-task">Adicionar Tarefa</Link>
      <TaskList />
    </div>
  );
};

export default Home;
