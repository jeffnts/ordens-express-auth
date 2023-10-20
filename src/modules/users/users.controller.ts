import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateRequest } from './dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() request: CreateRequest) {
    return this.usersService.create(request);
  }
}
