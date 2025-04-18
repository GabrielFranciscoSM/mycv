import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/BlogPost';

export const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const basePath = process.env.PUBLIC_URL || '';
    fetch(`${basePath}/content/blog/posts.json`)
      .then(res => res.json())
      .then(data => setPosts(data.posts))
      .catch(err => console.error('Error loading blog posts:', err));
  }, []);

  return (
    <div className="blog-page">
      <h1>Blog Posts</h1>
      <div className="blog-grid">
        {posts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-content">
              <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
              <div className="blog-meta">
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <p>{post.summary}</p>
              <div className="blog-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
