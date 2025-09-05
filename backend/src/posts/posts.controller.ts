import { Controller, Get, Post as PostDecorator, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(@Query('authorId') authorId?: string): Post[] {
    if (authorId) {
      return this.postsService.findByAuthor(+authorId);
    }
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Post | undefined {
    return this.postsService.findOne(+id);
  }

  @PostDecorator()
  create(@Body() createPostDto: { title: string; content: string; authorId: number }): Post {
    return this.postsService.create(createPostDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostDto: { title?: string; content?: string },
  ): Post | undefined {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): { success: boolean } {
    const success = this.postsService.remove(+id);
    return { success };
  }
}
