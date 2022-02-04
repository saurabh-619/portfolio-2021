import React from "react"
import { useState } from "react"
import { BlogFilterProps, Filters } from "../../types"
import {
  sortPostsWithDate,
  sortPostsWithId,
  sortPostsWithLikes,
} from "../../utills/common"

const BlogFilter: React.FC<BlogFilterProps> = ({
  totalData,
  setTotalBlogs,
  pageNumber,
  setPageNumber,
}) => {
  const [currentFilter, setCurrentFilter] = useState<Filters>(Filters.ALL)
  const [totalPages] = useState<number[]>(
    Array.from({ length: totalData.length / 4 }, (_, i) => i + 1)
  )

  const handleFilterClicked = (filter: Filters) => {
    setCurrentFilter(filter)
    if (filter === Filters.MOST_LIKED) {
      setTotalBlogs((prev: any) => [...sortPostsWithLikes(prev)])
    } else if (filter === Filters.RECENT) {
      setTotalBlogs((prev: any) => [...sortPostsWithDate(prev)])
    } else if (filter === Filters.ALL) {
      setTotalBlogs((prev: any) => [...sortPostsWithId(prev)])
    }
  }

  const handlePageClicked = (num: number) => {
    setPageNumber(num)
  }

  return (
    <div className="blog-filter">
      <div className="filters">
        <h3
          className={`font-main20-R ${
            currentFilter === Filters.ALL && "selected"
          }`}
          onClick={() => handleFilterClicked(Filters.ALL)}
        >
          All
        </h3>
        <h3
          className={`font-main20-R ${
            currentFilter === Filters.MOST_LIKED && "selected"
          }`}
          onClick={() => handleFilterClicked(Filters.MOST_LIKED)}
        >
          Most Liked
        </h3>
        <h3
          className={`font-main20-R ${
            currentFilter === Filters.RECENT && "selected"
          }`}
          onClick={() => handleFilterClicked(Filters.RECENT)}
        >
          Recent
        </h3>
      </div>
      <div className="pagination">
        {totalPages.map((num: number) => (
          <h3
            key={num}
            className={`page-number font-h430-B ${
              pageNumber === num && "selected"
            }`}
            onClick={() => handlePageClicked(num)}
          >
            {num}
          </h3>
        ))}
      </div>
    </div>
  )
}

export default BlogFilter
