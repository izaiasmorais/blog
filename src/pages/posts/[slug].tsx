import { gql } from "@apollo/client";
import { Flex, SlideFade, Text, useDisclosure } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { PostContent } from "../../components/PostContent";
import { client } from "../../lib/apollo";
import { Post } from "../../types/types";
import { relativeDateFormatter } from "../../utils/formatDate";
import { Header } from "../../components/Header";

interface PostsProps {
  posts: Post[];
}

interface PostProps {
  post: Post;
}

export default function PostPage({ post }: PostProps) {
  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  let formattedDate = relativeDateFormatter(post.postedAt);

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <SlideFade offsetY="50px" in={isOpen}>
        <Flex direction="column" p="1rem" mx="auto" mt={["0", "2rem", "5rem"]} mb="5rem" maxW="800px">
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
            {formattedDate} • 5 min de leitura
          </Text>

          <PostContent content={post.contentText} />
        </Flex>
        <Footer />
      </SlideFade>
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
        contentText
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
