import { useState, useEffect } from 'react';
import { userApi, postApi } from './api/api';
import type { User, Post } from './api/api';
import './App.css';

function App()
{
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [newPost, setNewPost] = useState({ title: '', content: '', authorId: 0 });
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  // Form visibility states
  const [showUserForm, setShowUserForm] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);

  // Load initial data
  useEffect(() =>
  {
    loadData();
  }, []);

  const loadData = async () =>
  {
    try
    {
      setLoading(true);
      const [usersResponse, postsResponse] = await Promise.all([
        userApi.getAll(),
        postApi.getAll()
      ]);
      setUsers(usersResponse.data);
      setPosts(postsResponse.data);
      setError(null);
    } catch (err)
    {
      setError('Failed to load data. Make sure the backend server is running on port 3000.');
      console.error('Error loading data:', err);
    } finally
    {
      setLoading(false);
    }
  };

  const loadPosts = async (authorId?: number) =>
  {
    try
    {
      const response = await postApi.getAll(authorId);
      setPosts(response.data);
    } catch (err)
    {
      console.error('Error loading posts:', err);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) =>
  {
    e.preventDefault();
    try
    {
      const response = await userApi.create(newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
      setShowUserForm(false);
    } catch (err)
    {
      console.error('Error creating user:', err);
    }
  };

  const handleUpdateUser = async (e: React.FormEvent) =>
  {
    e.preventDefault();
    if (!editingUser) return;

    try
    {
      const response = await userApi.update(editingUser.id, {
        name: editingUser.name,
        email: editingUser.email
      });
      setUsers(users.map(u => u.id === editingUser.id ? response.data : u));
      setEditingUser(null);
    } catch (err)
    {
      console.error('Error updating user:', err);
    }
  };

  const handleDeleteUser = async (id: number) =>
  {
    try
    {
      await userApi.delete(id);
      setUsers(users.filter(u => u.id !== id));
      setPosts(posts.filter(p => p.authorId !== id));
    } catch (err)
    {
      console.error('Error deleting user:', err);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) =>
  {
    e.preventDefault();
    try
    {
      const response = await postApi.create(newPost);
      setPosts([...posts, response.data]);
      setNewPost({ title: '', content: '', authorId: 0 });
      setShowPostForm(false);
    } catch (err)
    {
      console.error('Error creating post:', err);
    }
  };

  const handleUpdatePost = async (e: React.FormEvent) =>
  {
    e.preventDefault();
    if (!editingPost) return;

    try
    {
      const response = await postApi.update(editingPost.id, {
        title: editingPost.title,
        content: editingPost.content
      });
      setPosts(posts.map(p => p.id === editingPost.id ? response.data : p));
      setEditingPost(null);
    } catch (err)
    {
      console.error('Error updating post:', err);
    }
  };

  const handleDeletePost = async (id: number) =>
  {
    try
    {
      await postApi.delete(id);
      setPosts(posts.filter(p => p.id !== id));
    } catch (err)
    {
      console.error('Error deleting post:', err);
    }
  };

  if (loading)
  {
    return <div className="loading">Loading...</div>;
  }

  if (error)
  {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={loadData}>Retry</button>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>Management System</h1>
        <p>Frontend: React + TypeScript + Vite | Backend: NestJS + TypeScript</p>
      </header>

      <div className="container">
        {/* Users Section */}
        <section className="users-section">
          <h2>Users</h2>

          {/* Create User Button */}
          <div className="form-toggle">
            <button
              onClick={() => setShowUserForm(!showUserForm)}
              className="toggle-button"
            >
              {showUserForm ? '▼' : '▶'} Create New User
            </button>
          </div>

          {/* Create User Form */}
          {showUserForm && (
            <form onSubmit={handleCreateUser} className="form">
              <h3>Create New User</h3>
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
              />
              <div className="form-actions">
                <button type="submit">Create User</button>
                <button type="button" onClick={() => setShowUserForm(false)}>Cancel</button>
              </div>
            </form>
          )}

          {/* Users List */}
          <div className="list">
            {users.map(user => (
              <div key={user.id} className="item">
                {editingUser?.id === user.id ? (
                  <form onSubmit={handleUpdateUser} className="edit-form">
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
                  </form>
                ) : (
                  <>
                    <div className="item-content">
                      <h4>{user.name}</h4>
                      <p>{user.email}</p>
                      <small>Created: {new Date(user.createdAt).toLocaleDateString()}</small>
                    </div>
                    <div className="item-actions">
                      <button onClick={() => setEditingUser(user)}>Edit</button>
                      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Posts Section */}
        <section className="posts-section">
          <h2>Posts</h2>

          {/* Filter by User */}
          <div className="filter">
            <label>Filter by User:</label>
            <select
              value={selectedUserId || ''}
              onChange={(e) =>
              {
                const userId = e.target.value ? parseInt(e.target.value) : null;
                setSelectedUserId(userId);
                loadPosts(userId || undefined);
              }}
            >
              <option value="">All Users</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
          </div>

          {/* Create Post Button */}
          <div className="form-toggle">
            <button
              onClick={() => setShowPostForm(!showPostForm)}
              className="toggle-button"
            >
              {showPostForm ? '▼' : '▶'} Create New Post
            </button>
          </div>

          {/* Create Post Form */}
          {showPostForm && (
            <form onSubmit={handleCreatePost} className="form">
              <h3>Create New Post</h3>
              <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
              <textarea
                placeholder="Content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                required
              />
              <select
                value={newPost.authorId}
                onChange={(e) => setNewPost({ ...newPost, authorId: parseInt(e.target.value) })}
                required
              >
                <option value={0}>Select Author</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
              <div className="form-actions">
                <button type="submit">Create Post</button>
                <button type="button" onClick={() => setShowPostForm(false)}>Cancel</button>
              </div>
            </form>
          )}

          {/* Posts List */}
          <div className="list">
            {posts.map(post =>
            {
              const author = users.find(u => u.id === post.authorId);
              return (
                <div key={post.id} className="item">
                  {editingPost?.id === post.id ? (
                    <form onSubmit={handleUpdatePost} className="edit-form">
                      <input
                        type="text"
                        value={editingPost.title}
                        onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                      />
                      <textarea
                        value={editingPost.content}
                        onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                      />
                      <button type="submit">Save</button>
                      <button type="button" onClick={() => setEditingPost(null)}>Cancel</button>
                    </form>
                  ) : (
                    <>
                      <div className="item-content">
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                        <small>Author: {author?.name || 'Unknown'} | Created: {new Date(post.createdAt).toLocaleDateString()}</small>
                      </div>
                      <div className="item-actions">
                        <button onClick={() => setEditingPost(post)}>Edit</button>
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
