import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

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

const UserFind = ({ id }) => {
  const { data } =  useQuery(GET_USER, { variables: { id: "61a9816212adf1ad5d7c7ca7" }});
    console.log(data)
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
            <button> Eliminar </button>
            <button> Actualizar </button>
        </div>
        ))}
      </div>
    </div>
  )}

  return null;


  
}

export default UserFind;