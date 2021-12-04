import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Admin:Admin555@cluster0.dzwip.mongodb.net/ProyectoInvestigacion?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(db => console.log("Base de datos conectada"))
    .catch(err => console.log(err));
    