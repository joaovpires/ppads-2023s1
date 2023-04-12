import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Professor, ProfessorPrincipal } from "./professor.model";
import { ProfessorService, ProfessorPrincipalService } from "./professor.service";

@Controller("professorPrincipal")
export class ProfessorPrincipalController {

    constructor(private readonly professorPrincipalService: ProfessorPrincipalService){}

    @Post()
    async createProfessorPrincipal(@Body() professorPrincipal: ProfessorPrincipal): Promise<any> {
        const response = await this.professorPrincipalService.createProfessorPrincipal(professorPrincipal);
        return response
    }
    
    @Get()
    readProfessorPrincipal(): Promise<any>{
        return this.professorPrincipalService.readProfessorPrincipal()
    }

    @Patch()
    async updateProfessorPrincipal( @Body() professorPrincipal: ProfessorPrincipal ): Promise<any>{
        return await this.professorPrincipalService.updateProfessorPrincipal(professorPrincipal);
    }

    @Delete(":id")
    async deleteProfessorPrincipal( @Param("id") id: string ): Promise<any>{
        return await this.professorPrincipalService.deleteProfessorPrincipal(id);
    }

}

export class ProfessorController {

    constructor(private readonly professorService: ProfessorService){}

    @Post()
    async createProfessor(@Body() professor: Professor): Promise<any> {
        const response = await this.professorService.createProfessor(professor);
        return response
    }
    
    @Get()
    readProfessores(): Promise<any>{
        return this.professorService.readProfessores()
    }

    @Patch()
    async updateProfessor( @Body() professor: Professor ): Promise<any>{
        return await this.professorService.updateProfessor(professor);
    }

    @Delete(":id")
    async deleteProfessor( @Param("id") id: string ): Promise<any>{
        return await this.professorService.deleteProfessor(id);
    }

}
