import axios from 'axios';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://davinciphase2.vercel.app/api' 
  : 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
}

export interface CreatePostDto {
  title: string;
  content: string;
  authorId: number;
}

export interface UpdatePostDto {
  title?: string;
  content?: string;
}

// User API
export const userApi = {
  getAll: () => api.get<User[]>('/users'),
  getById: (id: number) => api.get<User>(`/users/${id}`),
  create: (data: CreateUserDto) => api.post<User>('/users', data),
  update: (id: number, data: UpdateUserDto) => api.put<User>(`/users/${id}`, data),
  delete: (id: number) => api.delete<{ success: boolean }>(`/users/${id}`),
};

// Post API
export const postApi = {
  getAll: (authorId?: number) => {
    const params = authorId ? { authorId } : {};
    return api.get<Post[]>('/posts', { params });
  },
  getById: (id: number) => api.get<Post>(`/posts/${id}`),
  create: (data: CreatePostDto) => api.post<Post>('/posts', data),
  update: (id: number, data: UpdatePostDto) => api.put<Post>(`/posts/${id}`, data),
  delete: (id: number) => api.delete<{ success: boolean }>(`/posts/${id}`),
};

export default api;
