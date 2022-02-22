import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { AuthRequest } from '../auth/interfaces/AuthRequest';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findOneByEmail(@Request() req: AuthRequest) {
    return this.userService.findOneByEmail(req.user.email);
  }
}
