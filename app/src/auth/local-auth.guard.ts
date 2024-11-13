import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
// LocalAuthGuard: Được sử dụng để xác thực đăng nhập bằng username và password.
export class LocalAuthGuard extends AuthGuard('local') {}