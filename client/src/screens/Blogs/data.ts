import { BloggingSites, BlogType, TechnologiesEnum } from '../../types';

class Blog {
  id: number;
  name: string;
  desc: string;
  imgUrl: string;
  blogUrl: string;
  websites: BloggingSites[];
  technologies: TechnologiesEnum[];
  timeStamp: string;
  likes: number;

  constructor(
    id = 1,
    name = 'New Blog',
    desc = 'New desc',
    imgUrl = '',
    blogUrl = '',
    websites = [BloggingSites.medium],
    technologies = [TechnologiesEnum.reactjs],
    timestamp = Date.now().toString(),
    likes = 10,
  ) {
    this.id = id;
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
    1,
    '1. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Amet tincidunt tempor elementum molestie magna porta cursus.',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1656162147611',
    457,
  ),
  new Blog(
    2,
    '2. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1667162142311',
    235,
  ),
  new Blog(
    3,
    '3. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1120162353611',
    680,
  ),
  new Blog(
    4,
    '4. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1667162142221',
    12,
  ),
  new Blog(
    5,
    '5. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1648162145611',
    200,
  ),
  new Blog(
    6,
    '6. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Amet tincidunt tempor elementum molestie magna porta cursus.',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '16961623447611',
    97,
  ),
  new Blog(
    7,
    '7. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1697162642311',
    857,
  ),
  new Blog(
    8,
    '8. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1630302353611',
    3456,
  ),
  new Blog(
    9,
    '9. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1639562982221',
    976,
  ),
  new Blog(
    10,
    '10. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1639722141211',
    235,
  ),
  new Blog(
    11,
    '11. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Amet tincidunt tempor elementum molestie magna porta cursus.',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '16301053444511',
    86,
  ),
  new Blog(
    12,
    '12. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1630732667311',
    964,
  ),
  new Blog(
    13,
    '13. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1630263653611',
    743,
  ),
  new Blog(
    14,
    '14. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1630682995221',
    854,
  ),
  new Blog(
    15,
    '15. Welcome to the coding world of Next.js and SSR and SSG and ISR',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. Nisl urna lobortis porttitor pellentesque facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt tempor elementum molestie magna porta cursus. ',
    'images/blogs/blog-card-bg.jpg',
    'https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8',
    [BloggingSites.medium, BloggingSites.dev],
    [TechnologiesEnum.nextjs, TechnologiesEnum.typescript],
    '1605122143411',
    46,
  ),
];
