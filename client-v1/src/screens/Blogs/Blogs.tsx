import React, { useEffect } from "react"
import { Blog as BlogClass, bloggingData } from "./data"
import { BloggingSites, BlogType } from "./../../types"
import { useState } from "react"
import BlogFilter from "./BlogFilter"
import { useScroll } from "../../utills/useScroll"
import { heightOfOnePage } from "../../utills/constants"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import {
  pageTitleAnimation,
  staggerWrapper,
  transitions,
} from "../../utills/animations"
import { getHashNodeBloggingData } from "../../utills/common"
import Blog from "./Blog"

export const Blogs = () => {
  const [totalData, setTotalBlogs] = useState(bloggingData)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)

  const [showBottomGradient, setShowBottomGradient] = useState(false)

  const { position } = useScroll()

  useEffect(() => {
    setShowBottomGradient(
      7 * heightOfOnePage < position && position < 11 * heightOfOnePage
    )
  }, [position])

  const getBlogData = async () => {
    const {
      data: {
        user: {
          publication: { posts },
        },
      },
    } = await getHashNodeBloggingData()

    const sanitisedblogs: BlogType[] = posts?.map(
      (blog, index) =>
        new BlogClass(
          index + 1,
          blog.title,
          blog.brief,
          blog.coverImage,
          `https://saurabhbomble.hashnode.dev/${blog.slug}`,
          [BloggingSites.hashnode],
          [],
          blog.dateAdded,
          blog.totalReactions
        )
    )
    setTotalBlogs(sanitisedblogs)
    setLoading(false)
  }

  useEffect(() => {
    getBlogData()
  }, [loading])

  // Animations
  const { ref, inView } = useInView()
  const wrapperController = useAnimation()

  useEffect(() => {
    if (inView) {
      wrapperController.start("animate")
    }
  }, [inView])

  const fadeUpAnimationNew = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { ...transitions, duration: 0.8 },
    },
  }

  const blogWrapperAnimation = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { ...transitions, duration: 0.8 },
    },
  }

  return (
    <motion.div
      id="blogs"
      className="container pb-2 snap top-heading-padding"
      variants={staggerWrapper(0, 0.6)}
      initial="initial"
      animate={wrapperController}
    >
      <motion.h2
        className="font-brand90-B"
        variants={pageTitleAnimation(undefined, 1)}
      >
        blogs
      </motion.h2>
      <motion.div variants={fadeUpAnimationNew} ref={ref}>
        <BlogFilter
          totalData={totalData}
          setTotalBlogs={setTotalBlogs}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </motion.div>
      <motion.div className="blogs-wrapper" variants={blogWrapperAnimation}>
        {totalData
          ?.slice((pageNumber - 1) * 4, pageNumber * 4)
          .map((blog: BlogType) => (
            <Blog key={blog.timeStamp} {...blog} />
          ))}
      </motion.div>
      {showBottomGradient && <div className="linear-gradient"></div>}
    </motion.div>
  )
}
