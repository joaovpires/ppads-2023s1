import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlunoController } from "./aluno.controller";
import { AlunoSchema } from "./aluno.model";
import { AlunoService } from "./aluno.service";

@Module({
  imports:[MongooseModule.forFeature([{name: "Aluno", schema: AlunoSchema}])],
  controllers: [AlunoController],
  providers: [AlunoService]
})
export class AlunoModule {}
