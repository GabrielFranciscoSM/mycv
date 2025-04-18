const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, '../src/content/blog');
const OUTPUT_DIR = path.join(__dirname, '../public/content/blog');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Read all markdown files and convert them
const posts = fs.readdirSync(CONTENT_DIR)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
    const { data, content: markdown } = matter(content);
    return {
      id: path.basename(file, '.md'),
      content: markdown,
      ...data
    };
  });

// Write processed content
fs.writeFileSync(
  path.join(OUTPUT_DIR, 'posts.json'),
  JSON.stringify({ posts }, null, 2)
);
