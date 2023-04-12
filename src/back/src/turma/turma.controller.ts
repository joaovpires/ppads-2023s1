import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Turma } from "./turma.model";
import { TurmaService } from "./turma.service";

@Controller("turma")
export class TurmaController {

    constructor(private readonly turmaService: TurmaService){}

    @Post()
    async createTurma(@Body() turma: Turma): Promise<any> {
        const response = await this.turmaService.createTurma(turma);
        return response
    }
    
    @Get()
    readTurmas(): Promise<any>{
        return this.turmaService.readTurmas()
    }

    @Patch()
    async updateTurma( @Body() turma: Turma ): Promise<any>{
        return await this.turmaService.updateTurma(turma);
    }

    @Delete(":id")
    async deleteTurma( @Param("id") id: string ): Promise<any>{
        return await this.turmaService.deleteTurma(id);
    }

}
