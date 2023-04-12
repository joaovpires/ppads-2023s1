import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Aluno } from "./aluno.model";
import { AlunoService } from "./aluno.service";

@Controller("aluno")
export class AlunoController {

    constructor(private readonly alunoService: AlunoService){}

    @Post()
    async createAluno(@Body() aluno: Aluno): Promise<any> {
        const response = await this.alunoService.createAluno(aluno);
        return response
    }
    
    @Get()
    readAluno(): Promise<any>{
        return this.alunoService.readAluno()
    }

    @Patch()
    async updateAluno( @Body() aluno: Aluno ): Promise<any>{
        return await this.alunoService.updateAluno(aluno);
    }

    @Delete(":id")
    async deleteAluno( @Param("id") id: string ): Promise<any>{
        return await this.alunoService.deleteAluno(id);
    }

}
