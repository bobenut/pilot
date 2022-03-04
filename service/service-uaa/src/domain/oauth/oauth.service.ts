import { Injectable } from '@nestjs/common';

@Injectable()
export class OAuthDomainService {
  getHello(): string {
    return 'Hello Oauth!!!';
  }
}