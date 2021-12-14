import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_PROYECTS = gql`
  {
    Proyecto {
      _id
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
export default function ProyectList() {

  const { loading, error, data } = useQuery(GET_PROYECTS);
  if (loading) return <p>Cargando por favor espere...</p>;
  if (error) {
    return <p>Error datos no encontrados</p>;
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <h4 className="bg-info text-center p-3 rounded">Lista de Proyectos</h4><hr/>
        {data.Proyecto.map(({ _id, Id_proyecto, Proyecto, Obj_Gen, Obj_esp, Presupuesto, Estado, Fase, id_lider }) => (
          <div key={_id} className="card m-2">
            <div className="card-body">
              <p>Id: {_id}</p>
              <p>Cod: {Id_proyecto}</p>
              <p>Titulo: {Proyecto}</p>
              <p>Obj.G: {Obj_Gen}</p>
              <p>Obj.E: {Obj_esp}</p>
              <p>Presupuesto: {Presupuesto}</p>
              <p>Eatado: {Estado}</p>
              <p>Fase: {Fase}</p>
              <p>Lider: {id_lider}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
