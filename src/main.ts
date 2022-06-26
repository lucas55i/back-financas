import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { setupDatabase } from 'config/setupDatabase';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Finanças')
    .setDescription('API para o controle de finanças pessoais')
    .setVersion('1.0')
    .addTag('Finanças')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3001;

  await app.listen(port).then(() => {
    setupDatabase();
    Logger.log(`Nest rodando na porta: ${port}`);
  });
}
bootstrap();
