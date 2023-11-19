/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ServiceAccount } from './conecction';
import * as admin from 'firebase-admin';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyB-NAZpDnh7uZwc9lQvccYyQPH_bxoqEa4",
  authDomain: "livebi2.firebaseapp.com",
  projectId: "livebi2",
  storageBucket: "livebi2.appspot.com",
  messagingSenderId: "442913316473",
  appId: "1:442913316473:web:9cf0822126d680aa67bea8",
  measurementId: "G-X1KRNVZ8SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


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
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
