import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Aula } from "./aula.model";
import { AulaService } from "./aula.service";

@Controller("aula")
export class AulaController {

    constructor(private readonly aulaService: AulaService){}

    @Post()
    async createAula(@Body() aula: Aula): Promise<any> {
        const response = await this.aulaService.createAula(aula);
        return response
    }
    
    @Get()
    readAulas(): Promise<any>{
        return this.aulaService.readAulas()
    }

    @Patch()
    async updateAula( @Body() aula: Aula ): Promise<any>{
        return await this.aulaService.updateAula(aula);
    }

    @Delete(":id")
    async deleteAula( @Param("id") id: string ): Promise<any>{
        return await this.aulaService.deleteAula(id);
    }

}
