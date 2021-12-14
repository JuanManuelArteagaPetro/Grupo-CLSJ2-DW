import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const GET_USER = gql`
  query oneusuario($id: String!){
    OneUsuario(id: $id) {
      _id
      nombre
      apellido
      email
      Rol
      Estado
      Id
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: String!){
    deleteUsuario(id: $id){
      _id
      nombre
      apellido
    }
  }
`;

const UserDelete = ({ id }) => {
  const [_id2, setId2] = useState("");
  const [_id, setId] = useState("");
  const { data } =  useQuery(GET_USER, { variables: { id: _id2 }});
  const [deleteUsuario] = useMutation(DELETE_USER);

  if (data && data.OneUsuario) {
    return(
    <div className="row">
      <div className="col-md-6 offset-md-3">
      {data.OneUsuario.map(({_id, nombre, apellido, email, Rol, Estado, Id }) => (
        <div className="card m-2">
            <div className="card-body">
                <h3>Usuario</h3><hr/>
                <p>ID: {_id}</p>
                <p>Nombre: {nombre}</p>
                <p>Apellido: {apellido}</p>
                <p>Email: {email}</p>
                <p>Rol: {Rol}</p>
                <p>Estado: {Estado}</p>
                <p>Identificación: {Id}</p>
            </div>
        </div>
        ))}
            <hr/><h5>Para eliminar Ingrese ID de usuario</h5><hr/>
            <form
              onSubmit={async e => {
                e.preventDefault();
                await deleteUsuario({ variables: { id: _id } });
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
            <button>Eliminar</button>
            </form>
      </div>
    </div>
  )};
  return (
      <div className="row">
      <div className="col-md-6 offset-md-3">
          <div className="card">
          <div className="card-body">
              <h3>Buscar Usuario</h3>
              <h5>Ingrese ID de usuario</h5><hr/>
              <form>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="ID"
                  value={_id}
                  className="form-control"
                  onChange={e => setId2(e.target.value)}
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