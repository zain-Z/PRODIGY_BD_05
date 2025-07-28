/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 👥 Protected: GET /users
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  // 👤 Protected: GET /users/:id
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  // 🆓 Public: POST /users (for registration)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // 🔐 Example: GET /users/protected
  @UseGuards(AuthGuard('jwt'))
  @Get('protected/example')
  getProtectedExample() {
    return { message: '🎉 You have accessed a protected route!' };
  }
}
