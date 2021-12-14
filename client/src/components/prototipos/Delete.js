import React from 'react';
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

const User = ({ id }) => {
  const { data } =  useQuery(GET_USER, { variables: { id: "61b66c0ccc41fbc40a7e8d52" }});

  const [deleteUsuario] = useMutation(DELETE_USER);

  const handleOnClick = (_id)=> {
    deleteUsuario({ variables: { id: _id }});
    console.log({ variables: { id }})
  }

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
            <button onClick={handleOnClick(_id)}>Eliminar</button>
            <button> Actualizar </button>
        </div>
        ))}

         
      </div>
    </div>
  )}

  return null;


  
}

export default User;