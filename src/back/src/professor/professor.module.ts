import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProfessorPrincipalController, ProfessorController } from "./professor.controller";
import { ProfessorSchema } from "./professor.model";
import { ProfessorService } from "./professor.service";

@Module({
  imports:[MongooseModule.forFeature([{name: "Professor", schema: ProfessorSchema}])],
  controllers: [ProfessorPrincipalController, ProfessorController],
  providers: [ProfessorService]
})
export class ProfessorModule {}
