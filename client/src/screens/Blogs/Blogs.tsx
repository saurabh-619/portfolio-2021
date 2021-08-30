import React, { useEffect } from 'react';
import { bloggingData } from './data';
import { BlogType } from './../../types';
import Blog from './Blog';
import { useState } from 'react';
import BlogFilter from './BlogFilter';

export const Blogs = () => {
  const [totalData, setTotalBlogs] = useState(bloggingData);
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <div id="blogs" className="container pb-2 snap top-heading-padding">
      <h2 className="font-brand90-B">blogs</h2>
      <BlogFilter
        totalData={totalData}
        setTotalBlogs={setTotalBlogs}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <div className="blogs-wrapper">
        {totalData.slice((pageNumber - 1) * 4, pageNumber * 4).map((blog: BlogType) => (
          <Blog key={blog.timeStamp} {...blog} />
        ))}
      </div>
      <div className="linear-gradient"></div>
    </div>
  );
};
