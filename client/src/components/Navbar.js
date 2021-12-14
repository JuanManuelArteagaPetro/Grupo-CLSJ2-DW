import React from "react";
import {Link} from 'react-router-dom'
import { FcMindMap } from "react-icons/fc";
import { FiStar, FiFilePlus, FiClipboard, FiSearch, FiUserPlus, FiUsers, FiUserCheck } from "react-icons/fi";

export const Navigation = () => (
  <nav className="navbar navbar-expand-md bg-danger navbar-dark sticky-top">
    <Link className="navbar-brand" to="/">
      <FcMindMap size={50}/> CLSJ2
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Inicio <FiStar size={20}/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new-proyect">
            Nuevo Proyecto <FiFilePlus size={20}/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/list-proyect">
            Proyectos <FiClipboard size={20}/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/find-proyect">
            Buscar Proyecto <FiSearch size={20}/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new-user">
            Nuevo Usuario <FiUserPlus size={20}/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/list-user">
            Usuarios <FiUsers size={20}/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/find-user">
            Buscar Usuario <FiUserCheck size={20}/>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
