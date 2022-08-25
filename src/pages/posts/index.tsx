import { gql } from "@apollo/client";
import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Footer } from "../../components/Footer";
import { Gallery } from "../../components/Gallery";
import { client } from "../../lib/apollo";
import { Post } from "../../types/types";
import { Header } from "../../components/Header";

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Gallery posts={posts} />
      <Footer />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<PostsProps>({
    query: gql`
      query MyQuery {
        posts(orderBy: postedAt_DESC) {
          slug
          title
          image {
            url
          }
          topic
          postedAt
          available
        }
      }
    `,
  });

  const posts = data.posts;

  return {
    props: {
      posts,
    },
  };
};
