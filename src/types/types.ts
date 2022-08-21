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

export type PostProps = {
  post: {
    slug: string;
    title: string;
    image: {
      url: string;
    };
    topic: string;
    postedAt: string;
    content: {
      markdown: string;
    };
  };
};
