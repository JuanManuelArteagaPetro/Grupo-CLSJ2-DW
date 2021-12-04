import Usuarios from "../../models/Person.js";
import Proyectos from "../../models/Post.js";
const Query = {

    hola() {
        return "Esta es la respuesta de la query hola"
    },
    Usuario: async () => {
        return await Usuarios.find()
    },
    Proyecto: async () => {
        return await Proyectos.find()
    },

}

export default Query;