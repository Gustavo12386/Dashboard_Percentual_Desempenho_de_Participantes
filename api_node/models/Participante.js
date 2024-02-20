import mongoose from "mongoose";

const participanteSchema = new mongoose.Schema({
    _id: {
        type: Number        
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    participation: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // Expressão regular que permite letras, números e caracteres especiais (porcentagem)
                return /^[a-zA-Z0-9%]+$/.test(value);
            },
            message: props => `${props.value} não é um valor válido para este campo!`
        }
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});


// Cria uma função para encontrar o último ID e incrementá-lo
participanteSchema.statics.getNextId = async function() {
    const lastParticipant = await this.findOne({}, {}, { sort: { _id: -1 } });
    if (lastParticipant) {
        return lastParticipant._id + 1;
    } else {
        return 1; // Caso não haja nenhum participante na coleção
    }
};

// Pré-hook para garantir que o ID seja incrementado antes de salvar
participanteSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // Se não é um novo documento, não é necessário incrementar o ID
    }

    try {
        this._id = await this.constructor.getNextId();
        next();
    } catch (error) {
        next(error);
    }
});

const Participante = mongoose.model('Participante', participanteSchema);

export default Participante;



