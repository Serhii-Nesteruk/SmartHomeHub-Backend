import {Inject, Injectable, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {User} from "../users/user.entity";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {AuthDto} from "./dto/auth.dto";

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) {
    }

    async validateUser(dto: AuthDto): Promise<User | null | undefined> {
        const user = await this.userService.findByEmail(dto.email);
        if (user && await bcrypt.compare(dto.password, user.password)) {
            return user;
        }
        return null;
    }

    async register(dto: AuthDto) : Promise<User> {
        const hash = await bcrypt.hash(dto?.password, 10);
        return this.userService.create(dto?.email, hash);
    }

    async login(user: User) : Promise<{ access_token: string }> {
        const payload = { sub: user?.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}