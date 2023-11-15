import { Module } from '@nestjs/common';
import { AnimeModule } from './anime/anime.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from './comments/comments.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ReportsModule } from './reports/reports.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    AnimeModule,
    AuthModule,
    NotificationsModule,
    ReportsModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.3wgeudx.mongodb.net/db_liveBi',
    ),
    CommentsModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
