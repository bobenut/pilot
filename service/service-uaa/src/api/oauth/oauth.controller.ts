import { Controller, Get } from '@nestjs/common';
import { OAuthDomainService } from '../../domain/oauth/oauth.service';

@Controller()
export class OAuthApiController {
  constructor(private readonly oauthService: OAuthDomainService) {}

  @Get('token')
  getHello(): string {
    return this.oauthService.getHello();
  }
}
