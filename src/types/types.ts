export interface GitPost {
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

export type Post = {
  slug: string;
  title: string;
  image: {
    url: string;
  };
  topic: string;
  postedAt: string;
  contentText: string;
};
