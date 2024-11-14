import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller({
  path: 'users',  // Đường dẫn gốc của API là /users
  version: '2',   // Phiên bản 2 của API
})
export class UsersV2Controller {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string; email: string }) {
    const { username, password, email } = body;
    // Giả sử ở phiên bản 2, logic tạo user khác đi
    return "register user v2";
  }

  @Get()
  @ApiOperation({ summary: 'Get all users - Version 2' })
  async getAllUsers() {
    return "Get all users - Version 2";
  }
}
