import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Aluno } from "./aluno.model";

@Injectable()
export class AlunoService {

    constructor( @InjectModel("Aluno") private readonly alunoModel: Model<Aluno>){}

    // CREATE
    async createAluno(aluno: Aluno){
        const alunoModel = new this.alunoModel(
            {
                id: aluno.id,
                nome: aluno.nome,
                emailResponsavel: aluno.emailResponsavel,
            }
        );
        const result = await alunoModel.save();
        const dbresponse = {
            statusCode: 200,
            message: "Aluno adicionado com sucesso",
            response: result
        }
        return dbresponse
    }

    // READ
    async readAluno(){
        const alunos = await this.alunoModel.find().exec();
        const result = alunos.map(aluno => ({
            id: aluno.id,
            nome: aluno.nome,
            emailResponsavel: aluno.emailResponsavel,
        }));
        const dbresponse = {
            statusCode: 200,
            message: "Alunos encontrados com sucesso!",
            response: result
        }
        return dbresponse
    }

    // UPDATE
    async updateAluno(aluno: Aluno): Promise<any>{
        if (!aluno){
            throw new NotFoundException("Não pode ser nulo");
        }
        const updatedAluno = await this.alunoModel.findOne({ id: aluno.id });

        if (aluno.nome){
            updatedAluno.nome = aluno.nome;
        }
        if (aluno.emailResponsavel){
            updatedAluno.emailResponsavel = aluno.emailResponsavel;
        }
        updatedAluno.save();
        const result = updatedAluno;
        const dbresponse = {
            statusCode: 200,
            message: "Aluno atualizado com sucesso!",
            response: result
        }
        return dbresponse
    }

    // DELETE
    async deleteAluno(id: string){
        const response = await this.alunoModel.deleteOne({ id: id }).exec();
        if (response.deletedCount == 0){
            throw new NotFoundException("Ocorreu um problema ao deletar!");
        }
        return {
            statusCode: 200, 
            message: "Aluno deletado com sucesso!", 
            response: null
        }
    }

}
