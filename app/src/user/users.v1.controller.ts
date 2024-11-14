// src/user/users.v1.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller({
  path: 'users',  // Đường dẫn gốc của API là /users
  version: '1',   // Phiên bản 1 của API
})
export class UsersV1Controller {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string; email: string }) {
    const { username, password, email } = body;
    return this.userService.createUser(username, password, email);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
