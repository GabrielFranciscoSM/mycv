import { BlogPost } from '../types/BlogPost';

export const blogPosts: BlogPost[] = [
  {
    id: "welcome-post",
    title: "Welcome to My Blog",
    content: "# Welcome\n\nThis is my first blog post about web development and technology.",
    summary: "A brief introduction to my technical blog",
    date: "2023-11-15",
    tags: ["Welcome", "Introduction"]
  },
  {
    id: "web-development",
    title: "Getting Started with Web Development",
    content: "# Web Development\n\nLet's explore the basics of web development...",
    summary: "Learn the fundamentals of web development",
    date: "2023-11-16",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"]
  }
];
