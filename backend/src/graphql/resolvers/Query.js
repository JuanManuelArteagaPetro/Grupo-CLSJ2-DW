import Usuarios from "../../models/Person.js";
import Proyectos from "../../models/Post.js";
const Query = {
    // Consultar todos los usuarios
    Usuario: async () => {
        return await Usuarios.find()
    },
    //Consultar todos los proyectos
    Proyecto: async () => {
        return await Proyectos.find()
    },
    //consultar un usuario por id
    async OneUsuario(_, {id}) {
        try {
            const usu = await Usuarios.find({ _id: id });
            return usu;
        } catch (err) {
            throw new Error(err);
        }
    },
    //consultar un proyecto por id
    async OneProyecto(_, {id}) {
        try {
            const pro = await Proyectos.find({ _id: id });
            return pro;
        } catch (err) {
            throw new Error(err);
        }
    },

}

export default Query;