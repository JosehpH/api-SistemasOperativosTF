import { CommandBus } from '@nestjs/cqrs';
import { QueryBus } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { AnimeModule } from './anime/anime.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './auth/interfaces/rest/user/user.controller';

@Module({
  imports: [
    AnimeModule,
    ProfilesModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/livebi'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
