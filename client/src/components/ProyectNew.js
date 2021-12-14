import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_PROYECT = gql`
  mutation CreateProyecto($Id_proyecto: String!, $Proyecto: String!, $Obj_Gen: String!, $Obj_esp: String!, $Presupuesto: Int!, $Estado: String!, $Fase: String!, $id_lider: Int!) {
    createProyecto(Id_proyecto: $Id_proyecto, Proyecto: $Proyecto, Obj_Gen: $Obj_Gen, Obj_esp: $Obj_esp, Presupuesto: $Presupuesto, Estado: $Estado, Fase: $Fase, id_lider: $id_lider) {
      Id_proyecto
      Proyecto
      Obj_Gen
      Obj_esp
      Presupuesto
      Estado
      Fase
      id_lider
    }
  }
`;

export default function ProyectNew(props) {
  const [Id_proyecto, setId_proyecto] = useState("");
  const [Proyecto, setProyecto] = useState("");
  const [Obj_Gen, setObj_Gen] = useState("");
  const [Obj_esp, setObj_esp] = useState("");
  const [Presupuesto, setPresupuesto] = useState("");
  const [Estado, setEstado] = useState("");
  const [Fase, setFase] = useState("");
  const [id_lider, setid_lider] = useState("");

  const [createProyecto] = useMutation(CREATE_PROYECT);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <h4 className="bg-info text-center p-3 rounded">Registro de Nuevo Proyecto</h4><hr/>
            <form
              onSubmit={async e => {
                e.preventDefault();
                await createProyecto({ variables: { Id_proyecto, Proyecto, Obj_Gen, Obj_esp, Presupuesto, Estado, Fase, id_lider } });
                window.location.href = "/";
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Codigo Proyecto"
                  value={Id_proyecto}
                  onChange={e => setId_proyecto(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Titulo"
                  value={Proyecto}
                  onChange={e => setProyecto(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="2"
                  placeholder="Obj.General"
                  value={Obj_Gen}
                  onChange={e => setObj_Gen(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <textarea
                  rows="2"
                  placeholder="Obj.Específico"
                  value={Obj_esp}
                  onChange={e => setObj_esp(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Presupuesto"
                  value={Presupuesto}
                  onChange={e => setPresupuesto(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Estado"
                  value={Estado}
                  onChange={e => setEstado(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Fase"
                  value={Fase}
                  onChange={e => setFase(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Lider"
                  value={id_lider}
                  onChange={e => setid_lider(e.target.value)}
                  className="form-control"
                />
              </div>
              <button className="btn btn-info btn-block">Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
