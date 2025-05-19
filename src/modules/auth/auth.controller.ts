import {AuthService} from "./auth.service";
import {Body, Controller, Post, UnauthorizedException} from "@nestjs/common";
import {AuthDto} from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @Post('login')
    async login(@Body() dto: AuthDto) : Promise<{access_token: string}> {
        const user = await this.authService.validateUser( dto );

        if (!user) {
            throw new UnauthorizedException("Invalid email or password");
        }

        return await this.authService.login(user);
    }

    @Post('register')
    async register(@Body() dto: AuthDto) : Promise<{access_token: string}> {
        if (!dto.email || !dto.password) {
            throw new UnauthorizedException("Email and password required");
        }

        const user = await this.authService.register( dto );

        if (!user) {
            throw new UnauthorizedException("Failed to create new user");
        }

        return await this.authService.login(user)
    }

}