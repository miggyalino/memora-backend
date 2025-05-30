import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Configuration for the application
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
