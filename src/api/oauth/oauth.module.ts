import { Module } from '@nestjs/common';
import { OAuthApiController } from './oauth.controller';
import { OAuthDomainService } from '../../domain/oauth/oauth.service';

@Module({
  imports: [],
  controllers: [OAuthApiController],
  providers: [OAuthDomainService],
})
export class OAuthApiModule {}
