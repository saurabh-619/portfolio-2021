import React from 'react';
import { useState } from 'react';
import { BlogFilterProps, Filters } from '../../types';

const BlogFilter: React.FC<BlogFilterProps> = ({ setBlogs }) => {
  const [currentFilter, setCurrentFilter] = useState<Filters>(Filters.ALL);

  const [totalPages, setTotalPages] = useState<number[]>(
    Array.from({ length: 5 }, (v, i) => i + 1),
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleFilterClicked = (filter: Filters) => {
    setCurrentFilter(filter);
  };

  const handlePageClicked = (num: number) => {
    setCurrentPage(num);
  };

  return (
    <div className="blog-filter">
      <div className="filters">
        <h3
          className={`font-main20-R ${currentFilter === Filters.ALL && 'selected'}`}
          onClick={(e) => handleFilterClicked(Filters.ALL)}
        >
          All
        </h3>
        <h3
          className={`font-main20-R ${currentFilter === Filters.MOST_LIKED && 'selected'}`}
          onClick={(e) => handleFilterClicked(Filters.MOST_LIKED)}
        >
          Most Liked
        </h3>
        <h3
          className={`font-main20-R ${currentFilter === Filters.RECENT && 'selected'}`}
          onClick={(e) => handleFilterClicked(Filters.RECENT)}
        >
          Recent
        </h3>
      </div>
      <div className="pagination">
        {totalPages.map((num: number) => (
          <h3
            key={num}
            className={`page-number font-h430-B ${currentPage === num && 'selected'}`}
            onClick={(e) => handlePageClicked(num)}
          >
            {num}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default BlogFilter;
