import { gql } from "@apollo/client";
import { Flex } from "@chakra-ui/react";
import { client } from "../lib";
import { PostsProps } from "../types/types";
import { Footer } from "../components/Footer";
import type { GetStaticProps } from "next";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Section from "../components/Section";

export default function Home({ posts }: PostsProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Section />
      <Gallery posts={posts} />
      <Footer />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<PostsProps>({
    query: gql`
      query MyQuery {
        posts(orderBy: publishedAt_DESC) {
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
