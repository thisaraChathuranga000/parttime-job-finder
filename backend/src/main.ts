import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strips properties not defined in the DTO
    forbidNonWhitelisted: true, // Throws an error if extra properties are present
    transform: true, // Automatically transforms payloads to the specified DTO class
  }));
  await app.listen(process.env.APPLICATION_PORT);
}
bootstrap();
 
