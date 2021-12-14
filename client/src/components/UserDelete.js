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

const UPDATE_USER = gql`
  mutation UpdateUsuario($id:String!, $nombre: String, $apellido: String, $Rol: String, $Estado: String) {
    updateUsuario(id: $id, nombre: $nombre, apellido: $apellido, Rol: $Rol, Estado: $Estado) {
      _id
      nombre
      apellido
      Rol
      Estado
      Id
    }
  }
`;

const UserDelete = ({ id }) => {
  const [_id, setId] = useState("");
  const [nombre, setNom] = useState("");
  const [apellido, setApe] = useState("");
  const [Rol, setRol] = useState("");
  const [Estado, setEst] = useState("");

  const { data } =  useQuery(GET_USER, { variables: { id: _id }});
  const [deleteUsuario] = useMutation(DELETE_USER);
  const [updateUsuario] = useMutation(UPDATE_USER);

  if (data && data.OneUsuario) {
    const datos = data;
    console.log(datos._id)
    return(
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <h4 className="bg-info text-center p-3 rounded">Usuario</h4>
      <hr/>
      {data.OneUsuario.map(({_id, nombre, apellido, email, Rol, Estado, Id }) => (
        <div className="card m-2">
            <div className="card-body">
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
            <form
              onSubmit={async e => {
                e.preventDefault();
                await updateUsuario({ variables: { id: _id, nombre: nombre, apellido: apellido, Rol: Rol, Estado: Estado } });
                window.location.href = "/";
              }}
            >
            <hr/>
              <h4 className="bg-info text-center p-3 rounded">Actualizar Usuario</h4>
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
                placeholder="Nombre"
                className="form-control"
                value={nombre}
                onChange={e => setNom(e.target.value)}
                />
                <br/>
                <input
                type="text"
                placeholder="Apellido"
                className="form-control"
                value={apellido}
                onChange={e => setApe(e.target.value)}
                />
                <br/>
                <input
                type="text"
                placeholder="Rol"
                className="form-control"
                value={Rol}
                onChange={e => setRol(e.target.value)}
                />
                <br/>
                <input
                type="text"
                placeholder="Estado"
                className="form-control"
                value={Estado}
                onChange={e => setEst(e.target.value)}
                />
            </div>
            <button className="btn btn-outline-success btn-block">Actualizar</button>
            </form>

            <hr/>
            <h4 className="bg-info text-center p-3 rounded">Eliminar Usuario</h4>
            <p>Ingrese ID de usuario</p>
            <hr/>
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
          <h4 className="bg-info text-center p-3 rounded">Buscar Usuario</h4>
              <p>Ingrese ID de usuario</p><hr/>
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