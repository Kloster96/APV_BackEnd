import mongoose from "mongoose";

const pacientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        requireL: true
    }, 
    nombre: {
        type: String,
        requireL: true
    }, 
    propietario: {
        type: String,
        requireL: true
    }, 
    email: {
        type: String,
        requireL: true
    }, 
    fecha: {
        type: Date,
        requireL: true,
        default: Date.now()
    }, 
    sintomas: {
        type: String,
        requireL: true
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario'
        },
    },
    {
        timestamps : true,
    }    
);

const Paciente = mongoose.model('Paciente', pacientesSchema)

export default Paciente;