import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}
    // Xác minh người dùng dựa trên username và password.
    async validateUser(username:string, password:string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        if (!user) {
            console.error('User not found');  // Thêm log để kiểm tra
            return null;
          }
          const isPasswordMatching = await bcrypt.compare(password, user.password);
          if (isPasswordMatching) {
            const { password, ...result } = user;
            return result;
          } else {
            console.error('Password mismatch');  // Thêm log để kiểm tra
          }
          return null;
        }
    // Tạo access_token JWT cho người dùng đã xác thực.
    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}