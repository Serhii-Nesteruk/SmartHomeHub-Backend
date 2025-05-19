import {PassportStrategy} from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt'

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret123' // TODO: change it before prod
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, email: payload.email };
    }
}