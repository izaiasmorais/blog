import { gql } from "@apollo/client";
import { Flex, SlideFade, Text, useDisclosure } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { client } from "../../lib";
import { PostProps, PostsProps } from "../../types/types";
import styles from "./styles.module.scss";

export default function Post({ post }: PostProps) {
  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <SlideFade offsetY="60px" in={isOpen}>
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

          <Text as="span" mb="2rem">
            {post.postedAt} • 5 min de leitura
          </Text>

          <div
            className={styles.Post}
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </Flex>
      </SlideFade>

      <Footer />
    </Flex>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.query<PostsProps>({
    query: gql`
      query MyQuery {
        posts(orderBy: publishedAt_DESC) {
          slug
        }
      }
    `,
  });

  const posts = data.posts;

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
