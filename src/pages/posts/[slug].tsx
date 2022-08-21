import { Flex, Text } from "@chakra-ui/react";
import { PostProps, PostsProps } from "../../types/types";
import { GetStaticProps } from "next";
import { client } from "../../lib";
import { gql } from "@apollo/client";
import { PostContent } from "../../components/PostContent";
import Header from "../../components/Header";

export default function Post({ post }: PostProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex direction="column" mx="auto" mt="5rem" maxWidth="800px">
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

        <PostContent />
      </Flex>
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
          markdown
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
