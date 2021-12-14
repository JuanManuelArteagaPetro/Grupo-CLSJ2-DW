import React from "react";
import logo from "./images/logo.png";
export default function Inicio() {
  return (
    <div>
        <h2 className="text-center">Bienvenido</h2>
        <hr/>
        <h4 className="text-center">Sistema para la administración de proyectos</h4>
        <hr/>
        <img src={logo} alt="Logo" className="rounded mx-auto d-block w-25 border border-danger"></img>
        <div className="text-right fixed-bottom m-4">
          <p>Programa Mision TIC 2022 - Ciclo 4</p>
          <p>Grupo CLSJ2</p>
        </div>
    </div>
  );
}
