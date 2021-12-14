import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_USER = gql`
  mutation CreateUsuario($nombre: String!, $apellido: String!, $email: String!, $clave: Int!, $Rol: String!, $Estado: String!, $Id: Int!) {
    createUsuario(nombre: $nombre, apellido: $apellido, email: $email, clave: $clave, Rol: $Rol, Estado: $Estado, Id: $Id) {
      nombre
      apellido
      Rol
      Estado
      Id
    }
  }
`;

export default function UserNew(props) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [Rol, setRol] = useState("");
  const [Estado, setEstado] = useState("");
  const [Id, setId] = useState("");
  const [createUsuario] = useMutation(CREATE_USER);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
          <h4 className="bg-info text-center p-3 rounded">Registro de Nuevo Usuario</h4><hr/>
            <form
              onSubmit={async e => {
                e.preventDefault();
                await createUsuario({ variables: { nombre, apellido, email, clave, Rol, Estado, Id } });
                window.location.href = "/";
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Apellido"
                  value={apellido}
                  onChange={e => setApellido(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Clave"
                  value={clave}
                  onChange={e => setClave(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Rol"
                  value={Rol}
                  onChange={e => setRol(e.target.value)}
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
                  placeholder="Identificación"
                  value={Id}
                  onChange={e => setId(e.target.value)}
                  className="form-control"
                />
              </div>
              <button className="btn btn-info btn-block">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
