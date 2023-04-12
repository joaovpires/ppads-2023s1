import * as mongoose from "mongoose";

export const ProfessorSchema = new mongoose.Schema({
    id: {type: String, required: false},
    nome: {type: String, required: false}
});

export interface ProfessorPrincipal {
    id: string,
    nome: string,
};

export interface Professor {
    id: string,
    nome: string,
    materiaLecionada: string
};