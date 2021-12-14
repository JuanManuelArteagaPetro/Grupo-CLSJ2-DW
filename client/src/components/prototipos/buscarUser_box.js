import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

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

export default function FormUser({ id }) {
    const [_id, setId] = useState("");
    
    const { data } =  useQuery(GET_USER, { variables: { id: _id }});
    console.log(id)
    if (data && data.OneUsuario) {
        return (
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
                  <button>Eliminar</button>
                  <button>Actualizar</button>
              </div>
              ))}
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
