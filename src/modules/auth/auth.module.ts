import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import {Module} from "@nestjs/common";
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {JwtStrategy} from "./jwt.strategy";


@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: 'secret123',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [ AuthController ],
    providers: [ AuthService, JwtStrategy ]
})
export class AuthModule {}


