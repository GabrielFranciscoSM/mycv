import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BlogPost as BlogPostType } from '../types/BlogPost';

export const BlogPost: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const basePath = process.env.PUBLIC_URL || '';
    fetch(`${basePath}/content/blog/posts.json`)
      .then(res => res.json())
      .then(data => {
        const foundPost = data.posts.find((p: BlogPostType) => p.id === id);
        setPost(foundPost || null);
      })
      .catch(err => console.error('Error loading blog post:', err));
  }, [id]);

  if (!post) return <div className="blog-post">Loading...</div>;

  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <div className="blog-post-meta">
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <div className="blog-tags">
        {post.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="blog-post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};
