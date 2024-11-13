import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: { username: string; password: string }) {
        try {
            const user = await this.authService.validateUser(loginDto.username, loginDto.password);
            return user;
            if (user) {
                return this.authService.login(user);
            }
            return { message: 'Invalid credentials' };
        } catch (error) {
            console.error('Login error:', error);
            return { message: 'An error occurred during login' };
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    async logout() {
        return this.authService.logout();
    }
}