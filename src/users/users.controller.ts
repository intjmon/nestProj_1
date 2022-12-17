import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import {UserLoginDto} fromn './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import {UserI}

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto:CreateUserDto): Promise<void>{
    console.log(dto);
  }
}
