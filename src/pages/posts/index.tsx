import { gql } from "@apollo/client";
import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Footer } from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import { client } from "../../lib";
import { PostsProps } from "../../types/types";

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
        posts {
          slug
          title
          image {
            url
          }
          topic
          postedAt
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
