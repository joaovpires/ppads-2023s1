import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AulaController } from "./aula.controller";
import { AulaSchema } from "./aula.model";
import { AulaService } from "./aula.service";

@Module({
  imports:[MongooseModule.forFeature([{name: "Aula", schema: AulaSchema}])],
  controllers: [AulaController],
  providers: [AulaService]
})
export class AulaModule {}
