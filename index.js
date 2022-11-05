import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacientesRoutes from "./routes/pacientesRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());

conectarDB();

const dominiosPerimitidos = [process.env.FRONEND_URL];

const corsOptions = {
    origin: function(origin, callback) {
        if(dominiosPerimitidos.indexOf(origin) !== -1) {
            // El origen del Rquest esta perimitido
            callback(null, true)
        } else {
            callback(new Error('No perimitido por CORS'))
        }
    }
}

app.use(cors( corsOptions ))

app.use("/api/veterinarios", veterinarioRoutes);

app.use("/api/pacientes", pacientesRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log(`Servidor Funcionando en el puerto: ${PORT}`);
});