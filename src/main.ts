import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors(); // Permitir CORS si es necesario
  const port = process.env.PORT || 3000;
  await app.listen(port);
}

bootstrap();

export const handler = server;
