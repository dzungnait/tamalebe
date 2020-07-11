import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  /*Setup Swagger*/
  const options = new DocumentBuilder()
    .setTitle('Task Managament API')
    .setDescription('This is description of Task Managament')
    .setVersion('1.0')
    .addTag('tasks')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  /**************************/


  const port = 3000;
  await app.listen(port);
}
bootstrap();
