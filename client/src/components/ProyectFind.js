import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const GET_PROYECT = gql`
  query oneproyecto($id: String!){
    OneProyecto(id: $id) {
      _id
      Proyecto
      Presupuesto
      Estado
      Fase
      id_lider
    }
  }
`;

const DELETE_PROYECT = gql`
  mutation DeleteProyect($id: String!){
    deleteProyecto(id: $id){
      _id
    }
  }
`;

const UPDATE_PROYECT = gql`
  mutation UpdateUsuario($id:String!, $Presupuesto: Int, $Estado: String, $Fase: String, $id_lider: Int) {
    updateProyecto(id: $id, Presupuesto: $Presupuesto, Estado: $Estado, Fase: $Fase, id_lider: $id_lider) {
      _id
      Proyecto
      Presupuesto
      Estado
      Fase
      id_lider
    }
  }
`;

const UserDelete = ({ id }) => {
  const [_id, setId] = useState("");
  //const [proyecto, setPro] = useState("");
  const [Presupuesto, setPre] = useState("");
  const [Estado, setEst] = useState("");
  const [Fase, setFas] = useState("");
  const [id_lider, setlid] = useState("");

  const { data } =  useQuery(GET_PROYECT, { variables: { id: _id }});
  const [deleteProyecto] = useMutation(DELETE_PROYECT);
  const [updateProyecto] = useMutation(UPDATE_PROYECT);

  if (data && data.OneProyecto) {
    const datos = data;
    console.log(datos._id)
    return(
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <h4 className="bg-info text-center p-3 rounded">Proyecto</h4>
      <hr/>
      {data.OneProyecto.map(({_id, Proyecto, Presupuesto, Estado, Fase, id_lider }) => (
        <div className="card m-2">
            <div className="card-body">
                <p>ID: {_id}</p>
                <p>Proyecto: {Proyecto}</p>
                <p>Presupuesto: {Presupuesto}</p>
                <p>Estado: {Estado}</p>
                <p>Fase: {Fase}</p>
                <p>Lider: {id_lider}</p>
            </div>
        </div>
        ))}
            <form
              onSubmit={async e => {
                e.preventDefault();
                await updateProyecto({ variables: { id: _id, Presupuesto: Presupuesto, Estado: Estado, Fase: Fase, id_lider: id_lider } });
                window.location.href = "/";
              }}
            >
            <hr/>
              <h4 className="bg-info text-center p-3 rounded">Actualizar Proyecto</h4>
            <hr/>
            <div className="form-group">
                <input
                type="text"
                placeholder="ID"
                className="form-control"
                value={_id}
                onChange={e => setId(e.target.value)}
                disabled
                />
                <br/>
                <input
                type="text"
                placeholder="Presupuesto"
                className="form-control"
                value={Presupuesto}
                onChange={e => setPre(e.target.value)}
                />
                <br/>
                <input
                type="text"
                placeholder="Estado"
                className="form-control"
                value={Estado}
                onChange={e => setEst(e.target.value)}
                />
                <br/>
                <input
                type="text"
                placeholder="Fase"
                className="form-control"
                value={Fase}
                onChange={e => setFas(e.target.value)}
                />
                <br/>
                <input
                type="text"
                placeholder="Lider"
                className="form-control"
                value={id_lider}
                onChange={e => setlid(e.target.value)}
                />
            </div>
            <button className="btn btn-outline-success btn-block">Actualizar</button>
            </form>

            <hr/>
            <h4 className="bg-info text-center p-3 rounded">Eliminar Proyecto</h4>
            <p>Ingrese ID de usuario</p>
            <hr/>
            <form
              onSubmit={async e => {
                e.preventDefault();
                await deleteProyecto({ variables: { id: _id } });
                window.location.href = "/";
              }}
            >
            <div className="form-group">
                <input
                type="text"
                placeholder="ID"
                value={_id}
                className="form-control"
                onChange={e => setId(e.target.value)}
                />
            </div>
            <button className="btn btn-outline-danger btn-block">Eliminar</button>
            </form>
      </div>
    </div>
  )};
  return (
      <div className="row">
      <div className="col-md-6 offset-md-3">
          <div className="card">
          <div className="card-body">
          <h4 className="bg-info text-center p-3 rounded">Buscar Proyecto</h4>
              <p>Ingrese ID de proyecto</p><hr/>
              <form>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="ID"
                  value={_id}
                  className="form-control"
                  onChange={e => setId(e.target.value)}
                  />
              </div>
              </form>
          </div>
          </div>
      </div>
      </div>
  )
}

export default UserDelete;