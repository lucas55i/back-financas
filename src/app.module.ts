import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinacasModule } from './financas/finacas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    FinacasModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
