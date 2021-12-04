import pkg from 'mongoose';
const { Schema, model } = pkg;

//import {Schema, model} from "mongoose";

const proyectoSchema = new Schema({
    Id_proyecto:{
        type: String,
        required: true
    },
    Proyecto: {
        type: String,
        required: true
    },
    Obj_Gen: {
        type: String,
        required: true
    },
    Obj_esp: {
        type: String,
        required: false
    },
    Presupuesto: {
        type: Number,
        required: false
    },
    Estado: {
        type: String,
        required: false
    },
    Fase: {
        type: String,
        required: false
    },
    id_lider: {
        type: Number,
        required: false
    },


});
export default model("Proyectos", proyectoSchema )