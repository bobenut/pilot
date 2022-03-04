import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OAuthApiModule } from './api/oauth/oauth.module';

@Module({
  imports: [OAuthApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
