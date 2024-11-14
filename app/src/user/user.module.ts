// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';
import { UsersV1Controller } from './users.v1.controller';
import { UsersV2Controller } from './users.v2.controller';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UsersV1Controller, UsersV2Controller], // Đăng ký cả hai controller
  exports: [UserService], // Xuất UserService để sử dụng trong AuthService
})
export class UserModule {}