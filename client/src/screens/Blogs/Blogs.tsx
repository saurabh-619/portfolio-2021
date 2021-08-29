import React from 'react';
import { bloggingData } from './data';
import { BlogType } from './../../types';
import Blog from './Blog';
import { useState } from 'react';
import BlogFilter from './BlogFilter';

export const Blogs = () => {
  const [blogs, setBlogs] = useState<any>(bloggingData);

  return (
    <div id="blogs" className="container pb-2 snap top-heading-padding">
      <h2 className="font-brand90-B">blogs</h2>
      <BlogFilter setBlogs={setBlogs} />
      <div className="blogs-wrapper">
        {blogs.map((blog: BlogType) => (
          <Blog key={blog.timeStamp} {...blog} />
        ))}
      </div>
      <div className="linear-gradient"></div>
    </div>
  );
};
