import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';

@Module({
  imports: [AlunoModule, MongooseModule.forRoot('mongodb+srv://joaovictorpires:admin@projetoads.one6rpa.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
