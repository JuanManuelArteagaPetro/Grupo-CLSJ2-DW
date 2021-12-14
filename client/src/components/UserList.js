import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const GET_USERS = gql`
  {
    Usuario {
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

export default function UserList() {

  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Cargando por favor espere...</p>;
  if (error) return <p>Error datos no encontrados</p>;
  //console.log(data);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <h4 className="bg-info text-center p-3 rounded">Lista de Usuarios</h4><hr/>
        {data.Usuario.map(({ _id, nombre, apellido, email, Rol, Estado, Id }) => (
          <div key={_id} className="card m-2">
            <div className="card-body">
              <p>Id: {_id}</p>
              <p>Nombre: {nombre}</p>
              <p>Apellido: {apellido}</p>
              <p>Email: {email}</p>
              <p>Rol: {Rol}</p>
              <p>Estado: {Estado}</p>
              <p>Identificación: {Id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
