import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    async getAllUsers() {
        return this.prisma.user.findMany();
    }
    async findByUsername(username: string) {
      return this.prisma.user.findUnique({
        where: { username },
      });
    }
  
    async findById(id: number) {
      return this.prisma.user.findUnique({
        where: { id },
      });
    }
  
    async createUser(username: string, password: string, email: string) {
      // Mã hóa mật khẩu
      const hashedPassword = await bcrypt.hash(password, 10);
      
      return this.prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          email,
        },
      });
    }

}