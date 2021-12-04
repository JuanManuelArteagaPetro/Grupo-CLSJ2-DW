import Usuarios from "../../models/Person.js";
import Proyectos from "../../models/Post.js";

const Mutation = {      
    createUsuario: async (_, { nombre, apellido, email, clave, Rol, Estado, Id }) => {
        const newUsuario= new Usuarios({ nombre, apellido, email, clave, Rol, Estado, Id   })
        return await newUsuario.save(); },

    createProyecto: async (_, {Id_proyecto, Proyecto, Obj_Gen, Obj_esp, Presupuesto, Estado, Fase, id_lider}) => {
        const newProyecto= new Proyectos({ Id_proyecto, Proyecto, Obj_Gen, Obj_esp, Presupuesto, Estado, Fase, id_lider})
        return await newProyecto.save(); }    
}
    

export default Mutation;