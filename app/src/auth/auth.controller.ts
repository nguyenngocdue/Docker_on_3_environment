import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard) // Bảo vệ endpoint bằng JwtAuthGuard
    @Post('logout')
    async logout(@Request() req) {
        // Tùy thuộc vào cách triển khai của bạn, ở đây có thể trả về thông báo
        return { message: 'Logout successful' };
    }

}