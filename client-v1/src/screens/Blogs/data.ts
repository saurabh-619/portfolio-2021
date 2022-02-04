import { BloggingSites, BlogType, TechnologiesEnum } from "../../types"

export class Blog {
  id: number
  name: string
  desc: string
  imgUrl: string
  blogUrl: string
  websites: BloggingSites[]
  technologies: TechnologiesEnum[]
  timeStamp: string
  likes: number

  constructor(
    id = 1,
    name = "New Blog",
    desc = "New desc",
    imgUrl = "",
    blogUrl = "",
    websites = [BloggingSites.medium],
    technologies = [TechnologiesEnum.reactjs],
    timestamp = Date.now().toString(),
    likes = 10
  ) {
    this.id = id
    this.name = name
    this.desc = desc
    this.imgUrl = imgUrl
    this.blogUrl = blogUrl
    this.websites = websites
    this.technologies = technologies
    this.timeStamp = timestamp
    this.likes = likes
  }
}

export const bloggingData: BlogType[] = [
  new Blog(
    1,
    "My first ever dev blog",
    "Hi fellow developers! This is my first blog ever, not only on this platform but on the internet. I'd heard that teaching new technology to someone else is the best way to learn and master it. So here I am, a self-taught intermediate developer with limited production experience.",
    "https://saurabhbomble.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1632423812138%2F_i1qXF8sc.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
    "https://saurabhbomble.hashnode.dev/my-first-ever-dev-blog",
    [BloggingSites.hashnode],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    "1632448080000",
    14
  ),
  new Blog(
    2,
    "Best web development tools - 2021",
    "Web development is difficult but gives you a high when you see things happening the way you anticipated. There are a lot of tools out there that help developers to make their lives simple. But from my experience, I have found that a lot of developers (mostly beginners) don't have any idea about these resources.",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1632462934687/_DHTd4yI2.gif?w=1600&h=840&fit=crop&crop=entropy&auto=format,compress&gif-q=60&format=webm",
    "https://saurabhbomble.hashnode.dev/best-web-development-tools-2021-1",
    [BloggingSites.hashnode],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    "1632537720000",
    6
  ),
  new Blog(
    3,
    "Web design inspirations - portfolio websites",
    "Portfolio websites are the best way to boast about your front-end skills. A portfolio website is nothing less than a resume for a developer. All of these listed websites are portfolio sites of wonderful designers and developers.",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1632853544138/_MiWyF7jf.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress",
    "https://saurabhbomble.hashnode.dev/web-design-inspirations-portfolio-websites",
    [BloggingSites.hashnode],
    [TechnologiesEnum.nextjs],
    "1632940740000",
    6
  ),
]
