import * as mongoose from "mongoose";

export const TurmaSchema = new mongoose.Schema({
    id: {type: String, required: false},
    anoEnsino: {type: String, required: false},
    serie: {type: String, required: false},
});

export interface Turma {
    id: string,
    nome: string,
    anoEnsino: string,
    serie: string
};