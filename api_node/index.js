import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Participante from "./models/Participante.js";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Permite solicitações da origem http://localhost:5173
    methods: ['GET', 'POST'], // Permite os métodos GET e POST
    allowedHeaders: ['Content-Type', 'Authorization'], // Permite os cabeçalhos Content-Type e Authorization
  }));

// Estrutura da API
app.use(express.json());

// Rotas
app.get("/participantes", async (request, response) => {
    try {
        const participantes = await Participante.find();
        return response.json(participantes);
    } catch (error) {
        console.error("Erro ao buscar participantes:", error);
        return response.status(500).json({ error: "Erro ao buscar participantes" });
    }
});

app.post("/participantes", async (request, response) => {
    const participante = request.body
    
    const newParticipant = await Participante.create(participante)

    return response.json(newParticipant);
 });

mongoose.connect("mongodb+srv://calderarogustavo:1hGrcXLlShWtM5H7@cluster0.k3uul6z.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Banco Conectado"))
.catch(() => console.log("Erro"))
app.listen(3000);


