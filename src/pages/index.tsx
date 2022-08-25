import { Footer } from "../components/Footer";
import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import { Post } from "../types/types";
import { Header } from "../components/Header";
import { Gallery } from "../components/Gallery";
import Section from "../components/Section";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
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
  const { data } = await client.query<HomeProps>({
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
