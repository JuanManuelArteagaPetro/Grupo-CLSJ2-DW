import Usuarios from "../../models/Person.js";
import Proyectos from "../../models/Post.js";

const Mutation = {    
    // Crear Proyecto  
    createUsuario: async (_, { nombre, apellido, email, clave, Rol, Estado, Id }) => {
        const newUsuario= new Usuarios({ nombre, apellido, email, clave, Rol, Estado, Id   })
        return await newUsuario.save(); },
    // Crear proyecto
    createProyecto: async (_, {Id_proyecto, Proyecto, Obj_Gen, Obj_esp, Presupuesto, Estado, Fase, id_lider }) => {
        const newProyecto= new Proyectos({ Id_proyecto, Proyecto, Obj_Gen, Obj_esp, Presupuesto, Estado, Fase, id_lider })
        return await newProyecto.save(); }, 
    // Actualizar usuario (id, nombre, apellido, rol, estado)
    updateUsuario: async (_, {id, nombre, apellido, Rol, Estado}) => {
        const UpUsuario = Usuarios.findByIdAndUpdate(id, {
            nombre: nombre,
            apellido: apellido,
            Rol: Rol,
            Estado: Estado
        })
        return UpUsuario;
    },
    // Actualizar proyecto (id, presupuesto, estado, fase, id_lider)
    updateProyecto: async (_, {id, Presupuesto, Estado, Fase, id_lider}) => {
        const UpProyecto = Proyectos.findByIdAndUpdate(id, {
            Presupuesto: Presupuesto,
            Estado: Estado,
            Fase: Fase,
            id_lider: id_lider
        })
        return UpProyecto;
    },
    // Eliminar Usuario
    deleteUsuario: async (_, {id}) => {
        const delUsuario = Usuarios.findByIdAndDelete({
            _id: id
        })
        return delUsuario;
    },
    // Eliminar proyecto
    deleteProyecto: async (_, {id}) => {
        const delProyecto = Proyectos.findByIdAndDelete({
            _id: id
        })
        return delProyecto;
    },
}
    

export default Mutation;