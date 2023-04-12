import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Aula } from "./aula.model";

@Injectable()
export class AulaService {

    constructor( @InjectModel("Aula") private readonly aulaModel: Model<Aula>){}

    // CREATE
    async createAula(aula: Aula){
        const aulaModel = new this.aulaModel(
            {
                data: aula.data,
                periodo: aula.periodo
            }
        );
        const result = await aulaModel.save();
        const dbresponse = {
            statusCode: 200,
            message: "Aula adicionada com sucesso",
            response: result
        }
        return dbresponse
    }

    // READ
    async readAulas(){
        const aulas = await this.aulaModel.find().exec();
        const result = aulas.map(aula => ({
            data: aula.data,
            periodo: aula.periodo
        }));
        const dbresponse = {
            statusCode: 200,
            message: "Aulas encontradas com sucesso!",
            response: result
        }
        return dbresponse
    }

    // UPDATE
    async updateAula(aulas: Aula): Promise<any>{
        if (!aulas){
            throw new NotFoundException("Não pode ser nulo");
        }
        const updatedAula = await this.aulaModel.findOne({ id: aulas.id });

        if (aulas.data){
            updatedAula.data = aulas.data;
        }
        if (aulas.periodo){
            updatedAula.periodo = aulas.periodo;
        }
        updatedAula.save();
        const result = updatedAula;
        const dbresponse = {
            statusCode: 200,
            message: "Aula atualizada com sucesso!",
            response: result
        }
        return dbresponse
    }

    // DELETE
    async deleteAula(id: string){
        const response = await this.aulaModel.deleteOne({ id: id }).exec();
        if (response.deletedCount == 0){
            throw new NotFoundException("Ocorreu um problema ao deletar!");
        }
        return {
            statusCode: 200, 
            message: "Aula deletada com sucesso!", 
            response: null
        }
    }

}
