import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TurmaController } from "./turma.controller";
import { TurmaSchema } from "./turma.model";
import { TurmaService } from "./turma.service";

@Module({
  imports:[MongooseModule.forFeature([{name: "Turma", schema: TurmaSchema}])],
  controllers: [TurmaController],
  providers: [TurmaService]
})
export class TurmaModule {}
