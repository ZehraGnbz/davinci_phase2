import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    new Post(1, 'First Post', 'This is the content of the first post', 1),
    new Post(2, 'Second Post', 'This is the content of the second post', 2),
    new Post(3, 'Third Post', 'This is the content of the third post', 1),
  ];

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  findByAuthor(authorId: number): Post[] {
    return this.posts.filter(post => post.authorId === authorId);
  }

  create(createPostDto: { title: string; content: string; authorId: number }): Post {
    const newId = Math.max(...this.posts.map(p => p.id)) + 1;
    const newPost = new Post(newId, createPostDto.title, createPostDto.content, createPostDto.authorId);
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, updatePostDto: { title?: string; content?: string }): Post | undefined {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      return undefined;
    }

    if (updatePostDto.title) {
      this.posts[postIndex].title = updatePostDto.title;
    }
    if (updatePostDto.content) {
      this.posts[postIndex].content = updatePostDto.content;
    }

    return this.posts[postIndex];
  }

  remove(id: number): boolean {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      return false;
    }

    this.posts.splice(postIndex, 1);
    return true;
  }
}
