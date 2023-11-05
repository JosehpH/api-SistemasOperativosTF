import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('LiveBi API')
    .setTermsOfService('')
    .setContact('LiveBi', 'http://google.com', 'http://google.com')
    .setLicense('Licencia Gratuita', 'http://google.com')
    .setExternalDoc('Info', 'http://google.com')
    .setDescription(
      'Api de anime y social hecha con NestJS por estudiantes de la Universidad Peruana de Ciencias Aplicadas',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
