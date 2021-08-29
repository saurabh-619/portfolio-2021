import { BloggingSites, BlogType, TechnologiesEnum } from '../../types';

class Blog {
  name: string;
  desc: string;
  imgUrl: string;
  blogUrl: string;
  websites: BloggingSites[];
  technologies: TechnologiesEnum[];
  timeStamp: string;
  likes: number;

  constructor(
    name = 'New Blog',
    desc = 'New desc',
    imgUrl = '',
    blogUrl = '',
    websites = [BloggingSites.medium],
    technologies = [TechnologiesEnum.reactjs],
    timestamp = Date.now().toString(),
    likes = 10,
  ) {
    this.name = name;
    this.desc = desc;
    this.imgUrl = imgUrl;
    this.blogUrl = blogUrl;
    this.websites = websites;
    this.technologies = technologies;
    this.timeStamp = timestamp;
    this.likes = likes;
  }
}

export const bloggingData: BlogType[] = [
  new Blog(
    'Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Amet tincidunt tempor elementum molestie magna porta cursus.',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1630162147611',
    200,
  ),
  new Blog(
    'Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1630162142311',
    200,
  ),
  new Blog(
    'Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1630162353611',
    200,
  ),
  new Blog(
    'Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1630162142221',
    200,
  ),
  new Blog(
    'Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1630162141211',
    200,
  ),
];
