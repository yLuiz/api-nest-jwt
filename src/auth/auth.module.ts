import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt'
import { StrategyService } from './strategy/strategy.service';
import { SECRET_KEY } from '../enveriment'

@Module({
  imports: [
    JwtModule.register({
      secret: SECRET_KEY,
      signOptions: {
        expiresIn: '48h',
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, StrategyService]
})
export class AuthModule {}
