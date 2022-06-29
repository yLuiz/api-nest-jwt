import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { SECRET_KEY } from '../../enveriment';

@Injectable()
export class StrategyService extends PassportStrategy(Strategy, 'jwt') {
    constructor () {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: SECRET_KEY
        })
    }

    async validate(payload) {
        return payload
    }
}
