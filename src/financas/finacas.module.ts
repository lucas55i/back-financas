import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinancasController } from './controllers/financas.controller';
import { FinancasSchema } from './dataBase/schemas/financasSchema';
import { FinancaService } from './services/financas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Financas', schema: FinancasSchema }]),
  ],
  controllers: [FinancasController],
  providers: [FinancaService],
})
export class FinacasModule {}
