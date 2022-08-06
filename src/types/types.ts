export type PostsProps = {
  posts: {
    slug: string;
    title: string;
    image: {
      url: string;
    };
    topic: string;
    postedAt: string;
  }[];
};
