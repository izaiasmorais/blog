import { gql } from "@apollo/client";
import { Flex, Image, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Header from "../../components/Header";
import { client } from "../../lib";
import { PostProps } from "../../types/types";
import styles from "./styles.module.scss";

export default function Post({ post }: PostProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        as="article"
        w="100%"
        maxWidth="720px"
        mx="auto"
        mt="3.75rem"
        direction="column"
        p="1rem"
      >
        <Text
          as="h1"
          fontSize="2.625rem"
          textAlign="left"
          fontWeight="700"
          mb="1rem"
        >
          {post.title}
        </Text>

        <Text as="span" mb="2rem" color="blackAlpha.600">
          {post.postedAt} • 5 min de leitura
        </Text>

        <div
          className={styles.Post}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params!;

  const GET_POSTS_BY_QUERY = gql`
    query GetPostBySlug($slug: String) {
      post(where: { slug: $slug }) {
        slug
        title
        postedAt
        image {
          url
        }
        content {
          html
        }
      }
    }
  `;

  const { data } = await client.query<PostProps>({
    query: GET_POSTS_BY_QUERY,
    variables: {
      slug: slug,
    },
  });

  return {
    props: {
      post: data.post,
    },
  };
};
