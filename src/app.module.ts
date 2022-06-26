import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
import { getEnvironmentFile } from 'config/configuration';
import { FinancasController } from './controllers/financas.controller';
import { FinancaService } from './services/financas.service';

const env = getEnvironmentFile();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [env],
    }),
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
