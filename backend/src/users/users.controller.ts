import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: { name: string; email: string }): User {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: { name?: string; email?: string },
  ): User | undefined {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): { success: boolean } {
    const success = this.usersService.remove(+id);
    return { success };
  }
}
