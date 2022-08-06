import { gql } from "@apollo/client";
import { Flex } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Section from "../components/Section";
import { client } from "../lib";
import { PostsProps } from "../types/types";

export default function Home({ posts }: PostsProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Section />
      <Gallery posts={posts} />
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
