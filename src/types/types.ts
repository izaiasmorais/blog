export interface Post {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

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
      markdown: any;
    };
  };
};
