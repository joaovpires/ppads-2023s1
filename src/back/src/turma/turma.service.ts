import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Turma } from "./turma.model";

@Injectable()
export class TurmaService {

    constructor( @InjectModel("Turma") private readonly turmaModel: Model<Turma>){}

    // CREATE
    async createTurma(turma: Turma){
        const turmaModel = new this.turmaModel(
            {
                id: turma.id,
                nome: turma.nome,
                anoEnsino: turma.anoEnsino,
                serie: turma.serie
            }
        );
        const result = await turmaModel.save();
        const dbresponse = {
            statusCode: 200,
            message: "Turma adicionada com sucesso",
            response: result
        }
        return dbresponse
    }

    // READ
    async readTurmas(){
        const turmas = await this.turmaModel.find().exec();
        const result = turmas.map(turma => ({
            id: turma.id,
            nome: turma.nome,
            anoEnsino: turma.anoEnsino,
            serie: turma.serie
        }));
        const dbresponse = {
            statusCode: 200,
            message: "Turamas encontradas com sucesso!",
            response: result
        }
        return dbresponse
    }

    // UPDATE
    async updateTurma(turma: Turma): Promise<any>{
        if (!turma){
            throw new NotFoundException("Não pode ser nulo");
        }
        const updatedTurma = await this.turmaModel.findOne({ id: turma.id });

        if (turma.nome){
            updatedTurma.nome = turma.nome;
        }
        if (turma.anoEnsino){
            updatedTurma.anoEnsino = turma.anoEnsino;
        }
        if (turma.serie){
            updatedTurma.serie = turma.serie;
        }
        updatedTurma.save();
        const result = updatedTurma;
        const dbresponse = {
            statusCode: 200,
            message: "Turma atualizada com sucesso!",
            response: result
        }
        return dbresponse
    }

    // DELETE
    async deleteTurma(id: string){
        const response = await this.turmaModel.deleteOne({ id: id }).exec();
        if (response.deletedCount == 0){
            throw new NotFoundException("Ocorreu um problema ao deletar!");
        }
        return {
            statusCode: 200, 
            message: "Turma deletada com sucesso!", 
            response: null
        }
    }

}
