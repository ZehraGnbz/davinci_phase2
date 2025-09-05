import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    new User(1, 'John Doe', 'john@example.com'),
    new User(2, 'Jane Smith', 'jane@example.com'),
    new User(3, 'Bob Johnson', 'bob@example.com'),
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  create(createUserDto: { name: string; email: string }): User {
    const newId = Math.max(...this.users.map(u => u.id)) + 1;
    const newUser = new User(newId, createUserDto.name, createUserDto.email);
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: { name?: string; email?: string }): User | undefined {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return undefined;
    }

    if (updateUserDto.name) {
      this.users[userIndex].name = updateUserDto.name;
    }
    if (updateUserDto.email) {
      this.users[userIndex].email = updateUserDto.email;
    }

    return this.users[userIndex];
  }

  remove(id: number): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return false;
    }

    this.users.splice(userIndex, 1);
    return true;
  }
}
