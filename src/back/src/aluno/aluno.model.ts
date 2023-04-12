import * as mongoose from "mongoose";

export const AlunoSchema = new mongoose.Schema({
    id: {type: String, required: false},
    nome: {type: String, required: false},
    emailResponsavel: {type: String, required: false},
});

export interface Aluno{
    id: string,
    nome: string,
    emailResponsavel: string,
};