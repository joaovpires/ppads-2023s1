import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProfessorPrincipal, Professor } from "./professor.model";

@Injectable()
export class ProfessorPrincipalService {

    constructor( @InjectModel("ProfessorPrincipal") private readonly professorPrincipalModel: Model<ProfessorPrincipal>){}

    // CREATE
    async createProfessorPrincipal(professorPrincipal: ProfessorPrincipal){
        const professorPrincipalModel = new this.professorPrincipalModel(
            {
                id: professorPrincipal.id,
                nome: professorPrincipal.nome
            }
        );
        const result = await professorPrincipalModel.save();
        const dbresponse = {
            statusCode: 200,
            message: "Professor principal adicionado com sucesso",
            response: result
        }
        return dbresponse
    }

    // READ
    async readProfessorPrincipal(){
        const professoresPrincipais = await this.professorPrincipalModel.find().exec();
        const result = professoresPrincipais.map(professorPrincipal => ({
            id: professorPrincipal.id,
            nome: professorPrincipal.nome
        }));
        const dbresponse = {
            statusCode: 200,
            message: "Professores principais encontrados com sucesso!",
            response: result
        }
        return dbresponse
    }

    // UPDATE
    async updateProfessorPrincipal(professorPrincipal: ProfessorPrincipal): Promise<any>{
        if (!professorPrincipal){
            throw new NotFoundException("Não pode ser nulo");
        }
        const updatedProfessorPrincipal = await this.professorPrincipalModel.findOne({ id: professorPrincipal.id });

        if (professorPrincipal.nome){
            updatedProfessorPrincipal.nome = professorPrincipal.nome;
        }
        updatedProfessorPrincipal.save();
        const result = updatedProfessorPrincipal;
        const dbresponse = {
            statusCode: 200,
            message: "Professor principal atualizado com sucesso!",
            response: result
        }
        return dbresponse
    }

    // DELETE
    async deleteProfessorPrincipal(id: string){
        const response = await this.professorPrincipalModel.deleteOne({ id: id }).exec();
        if (response.deletedCount == 0){
            throw new NotFoundException("Ocorreu um problema ao deletar!");
        }
        return {
            statusCode: 200, 
            message: "Professor principal deletado com sucesso!", 
            response: null
        }
    }

}

export class ProfessorService {

    constructor( @InjectModel("Professor") private readonly professorModel: Model<Professor>){}

    // CREATE
    async createProfessor(professor: Professor){
        const professorModel = new this.professorModel(
            {
                id: professor.id,
                nome: professor.nome,
                materiaLecionada: professor.materiaLecionada
            }
        );
        const result = await professorModel.save();
        const dbresponse = {
            statusCode: 200,
            message: "Professor adicionado com sucesso",
            response: result
        }
        return dbresponse
    }

    // READ
    async readProfessores(){
        const professores = await this.professorModel.find().exec();
        const result = professores.map(professor => ({
            id: professor.id,
            nome: professor.nome,
            materiaLecionada: professor.materiaLecionada,
        }));
        const dbresponse = {
            statusCode: 200,
            message: "Professores encontrados com sucesso!",
            response: result
        }
        return dbresponse
    }

    // UPDATE
    async updateProfessor(professor: Professor): Promise<any>{
        if (!professor){
            throw new NotFoundException("Não pode ser nulo");
        }
        const updatedProfessor = await this.professorModel.findOne({ id: professor.id });

        if (professor.nome){
            updatedProfessor.nome = professor.nome;
        }
        if (professor.materiaLecionada){
            updatedProfessor.materiaLecionada = professor.materiaLecionada;
        }
        updatedProfessor.save();
        const result = updatedProfessor;
        const dbresponse = {
            statusCode: 200,
            message: "Professor atualizado com sucesso!",
            response: result
        }
        return dbresponse
    }

    // DELETE
    async deleteProfessor(id: string){
        const response = await this.professorModel.deleteOne({ id: id }).exec();
        if (response.deletedCount == 0){
            throw new NotFoundException("Ocorreu um problema ao deletar!");
        }
        return {
            statusCode: 200, 
            message: "Professor deletado com sucesso!", 
            response: null
        }
    }

}
